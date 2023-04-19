import {
  getGenresLib,
  getReleaseDate,
  getMovieTitle,
  getMoviePoster,
} from './markup-func';
import { storageKey } from './themse-picker';
import { refs } from './refs';

export function renderMarkup(listArr) {
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

export function renderLibPlug() {
    refs.plugWrapperLight.classList.remove('hidden');
}
