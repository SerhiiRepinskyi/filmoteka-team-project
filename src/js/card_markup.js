import {
  getGenres,
  getReleaseDate,
  getMovieTitle,
  getMoviePoster,
  getGenres,
} from './markup-func';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

export async function filmCardMarkup(fetchedData) {
  Loading.pulse({
    svgColor: '#b92f2c',
  });

  const markup = await fetchedData
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      return `<li class='card-item' data-id='${id}'>
      <div class='image__wrapper'>
        <img class='movie__poster' 
        src='${getMoviePoster(poster_path)}' 
        width='395' 
        alt='${title}' 
        loading='lazy' />
      </div>
      <div class='card-item__info-wrapper'>
      <h2 class='card-item__title'>${getMovieTitle(title)}</h2>
      <div class='card-item__info'>
      <p class='card-item__genre'>${getGenres(genre_ids)}</p>
      <span class='card-item__year'>|</span>
      <p class='card-item__year'>${getReleaseDate(release_date)}</p>
      </div>
      </div>
      </li>`;
    })
    .join('');
  Loading.remove();
  return markup;
}
