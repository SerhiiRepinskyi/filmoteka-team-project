import { DatabaseAPI } from './firebase/database-api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix';
import { refs } from './refs';
import { renderMarkup } from './lib-card-markup';

export const service = new DatabaseAPI();
const storageKey = 'theme-preference';

export async function renderWatchedList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  try {
    const listArr = await service.getWatchedList();
    const markup = renderMarkup(listArr);
    refs.libGalleryEl.insertAdjacentHTML('beforeend', markup);
    window.removeEventListener('load', renderWatchedList);
  } catch (error) {
    if (localStorage.getItem(storageKey) === 'dark') {
      refs.plugWrapperDark.classList.toggle('hidden');
    } else {
      refs.plugWrapperLight.classList.toggle('hidden');
    }
    
    Report.info(
      'Filmoteka Info',
      'This List is empty. Start adding some movies to see them here',
      'OK'
    );
  }
  Loading.remove();
}
