import { FilmAPI } from './api';

const modalCardRender = document.querySelector('.modal-card__render');

const modalCardAPI = new FilmAPI();

export default async function fetchModalCard(objectMovie) {
  console.log(objectMovie);

  const posterPath = 'https://image.tmdb.org/t/p/w500';
  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    vote_average,
    vote_count,
    title,
    genres,
    popularity,
  } = objectMovie;
  const markup = `<div class="modal-card__img-wrapper"><img
  class="modal-card__img"
  src="${posterPath}${poster_path}"
  alt="film-poster"
  width="240"
/> </div>
<div class="modal-card__information-wrapper"><p class="modal-card__title">${title}</p>
<ul class="modal-card__film-information-list">
<div class="modal-card__film-information-items-wrrapper">
  <li class="modal-card__film-information__items ">Vote / Votes</li>
  <p class="modal-card__film-information__text"><span class="modal-card__vote--gray">${vote_count}</span>/<span class="modal-card__vote--red">${vote_average}</span></p>
</div>
<div class="modal-card__film-information-items-wrrapper">
<li class="modal-card__film-information__items">
  Popularity
</li>
<p class="modal-card__film-information__text">${popularity}</p></div>
<div class="modal-card__film-information-items-wrrapper">
  <li class="modal-card__film-information__items" >Original Title
</li>
<p class="modal-card__film-information__text">${original_title}</p></div>
<div class="modal-card__film-information-items-wrrapper">
<li class="modal-card__film-information__items">
  Genre
</li>
<p class="modal-card__film-information__text">${genres.map(
    ganre => ganre.name
  )}</p></div>
</ul>
<p class="modal-card__subtitle">About</p>
<p class="modal-card__text">${overview}
</p><div class="modal-card__btn-wrapper">
<button
class="modal-card__watched-btn add-to-watched"
type="button"
data-card-modal-watched-film
>
add to Watched
</button>
<button
class="modal-card__queue-btn add-to-queue"
type="button"
data-card-modal-queue-film
>
add to queue
</button></div>
</div>`;

  return (modalCardRender.innerHTML = markup);
}
