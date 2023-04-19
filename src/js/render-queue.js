import { renderMarkup, renderLibPlug } from './lib-card-markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from './refs';
import { service } from './render-watched';
import { Report } from 'notiflix';

export async function renderQueueList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  refs.libGalleryEl.innerHTML = '';
  refs.plugWrapperLight.classList.add('hidden');
  try {
    const listArr = await service.getQueueList();
    if (listArr.length !== 0) {
      const markup = renderMarkup(listArr);
      refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
    } else {
      renderLibPlug();
    }
  } catch (error) {
    Notify.failure('Ooops! Something went wrong. Try reloading page');
  }
  Loading.remove();
}

export async function renderQueueListOnModalClose() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  refs.libGalleryEl.innerHTML = '';
  refs.plugWrapperLight.classList.add('hidden');

  try {
    const listArr = await service.getQueueList();
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
