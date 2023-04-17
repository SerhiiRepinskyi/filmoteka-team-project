import getGenre from './genre_info';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export async function filmCardMarkup(fetchedData) {
  const posterPath = 'https://image.tmdb.org/t/p/w500';
  Loading.pulse({
    svgColor: '#b92f2c',
  });
  Loading.remove(1000);
  const markup = await fetchedData
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      let moviePoster = `${posterPath}${poster_path}`;
      let movieTitle = title;
      if (release_date === "") {
        release_date = '----'
      }

      if (title.length > 34) {
        movieTitle = `${title.slice(0, 34)}...`;
      }
      if (poster_path === null) {
        moviePoster = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png';
      }
            return `<li class='card-item' data-id='${id}'>
      <div class='image__wrapper'>
        <img class='movie__poster' src='${moviePoster}' width='395' alt='${title}' loading='lazy' />
      </div>
      <div class='card-item__info-wrapper'>
      <h2 class='card-item__title'>${movieTitle}</h2>
      <div class='card-item__info'>
      <p class='card-item__genre'>${getGenre(genre_ids)}</p>
      <span class='card-item__year'>|</span>
      <p class='card-item__year'>${release_date.slice(0, 4)}</p>
      </div>
      </div>
      </li>`;
    })
    .join('');
  
  return markup;
}
