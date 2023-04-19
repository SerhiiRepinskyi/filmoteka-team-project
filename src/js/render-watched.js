import { DatabaseAPI } from './firebase/database-api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix';
import { refs } from './refs';
import { renderMarkup, renderLibPlug } from './lib-card-markup';

export const service = new DatabaseAPI();

export async function renderWatchedList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  refs.libGalleryEl.innerHTML = '';
  refs.plugWrapperLight.classList.add('hidden');
  try {
    const listArr = await service.getWatchedList();
    if (listArr.length !== 0) {
      const markup = renderMarkup(listArr);
      refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
    } else {
      renderLibPlug();
    }
    window.removeEventListener('load', renderWatchedList);
  } catch (error) {
    Notify.failure('Ooops! Something went wrong. Try reloading page');
  }
  Loading.remove();
}

export async function renderWatchedListOnModalClose() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  refs.libGalleryEl.innerHTML = '';
  refs.plugWrapperLight.classList.add('hidden');
  try {
    const listArr = await service.getWatchedList();
    if (listArr.length !== 0) {
      const markup = renderMarkup(listArr);
      refs.libGalleryEl.innerHTML = markup;
    } else {
      renderLibPlug();
    }
  } catch (error) {
    Notify.failure('Ooops! Something went wrong. Try reloading page');
  }

  Loading.remove();
}
