import getGenre from './genre_info';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export async function filmCardMarkup(fetchedData) {
  const posterPath = 'https://image.tmdb.org/t/p/w500';
  const markup = await fetchedData
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      let movieTitle = title;
      if (title.length > 31) {
        movieTitle = `${title.slice(0, 31)}...`;
      }
      return `<li class='card-item' data-id='${id}'>
      <div class='image__wrapper'>
        <img class='movie__poster'src='${posterPath}${poster_path}' alt='${title}' loading='lazy' />
      </div>
      <h2 class='card-item__title'>${movieTitle}</h2>
      <div class='card-item__info'>
      <p class='card-item__genre'>${getGenre(genre_ids)}</p>
      <span class='card-item__year'>|</span>
      <p class='card-item__year'>${release_date.slice(0, 4)}</p>
      </div>
      </li>`;
    })
    .join('');
    Loading.remove();
  return markup;
}
