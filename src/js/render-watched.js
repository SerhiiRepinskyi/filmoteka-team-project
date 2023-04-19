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
    const markup = renderMarkup(listArr);
    refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
    window.removeEventListener('load', renderWatchedList);
  } catch (error) {
    renderLibPlug();
    Report.info(
      'Filmoteka Info',
      'This List is empty. Start adding some movies to see them here',
      'OK'
    );
  }
  Loading.remove();
}