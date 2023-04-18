import { renderMarkup } from './lib-card-markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {refs} from './refs';
import { service } from './render-watched';

export async function renderQueueList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  const listArr = await service.getQueueList();
  const markup = renderMarkup(listArr);
  refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
  Loading.remove();
}
