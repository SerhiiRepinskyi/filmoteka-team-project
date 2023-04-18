import { DatabaseAPI } from './firebase/database-api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {refs} from './refs';
import { renderMarkup } from './lib-card-markup';

export const service = new DatabaseAPI();

export async function renderWatchedList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  const listArr = await service.getWatchedList();
  const markup = renderMarkup(listArr);
  refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
  Loading.remove();
  window.removeEventListener('load', renderWatchedList);
}
