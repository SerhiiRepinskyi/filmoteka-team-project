import { DatabaseAPI } from './firebase/database-api';
import { Report } from 'notiflix';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './firebase/firebase-init';
import {
  getGenresLib,
  getReleaseDate,
  getMovieTitle,
  getMoviePoster,
} from './markup-func';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { myLibraryBtn } from './refs';

const service = new DatabaseAPI();

const galleryEl = document.querySelector('.library-cards__list');

export async function renderWatchedList() {
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  try {
    const listArr = await service.getWatchedList();
    const markup = renderMarkup(listArr);
    galleryEl.insertAdjacentHTML('beforeend', markup);
    Loading.remove();
    window.removeEventListener('load', renderWatchedList);
  } catch (error) {
    console.log(error);
    Report.info(
      'Filmoteka Info',
      'This List is empty. Start adding some movies to see them here',
      'OK'
    );
  }
}

function renderMarkup(listArr) {
  console.log(listArr);
  return listArr
    .map(({ id, title, poster_path, release_date, genres }) => {
      return `<li class='card-item' data-id='${id}'>
      <div class='image__wrapper'>
        <img class='movie__poster' src='${getMoviePoster(
          poster_path
        )}' width='395' alt='${title}' loading='lazy' />
      </div>
      <div class='card-item__info-wrapper'>
      <h2 class='card-item__title'>${getMovieTitle(title)}</h2>
      <div class='card-item__info'>
      <p class='card-item__genre'>${getGenresLib(genres)}</p>
      <span class='card-item__year'>|</span>
      <p class='card-item__year'>${getReleaseDate(release_date)}</p>
      </div>
      </div>
      </li>`;
    })
    .join('');
}
