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
    const markup = renderMarkup(listArr);
    refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
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
