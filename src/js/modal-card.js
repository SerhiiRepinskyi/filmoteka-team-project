import { FilmAPI } from './api';
const modalCardEl = document.querySelector('.modal-card');

const modalCardAPI = new FilmAPI();

export default async function fetchModalCard() {
  const fetchedData = await modalCardAPI.fetchDetails().then(result => result);
  console.log('FETCH', fetchedData);
  const posterPath = 'https://image.tmdb.org/t/p/w500';
  const {
    backdrop_path,
    poster_path,
    id,
    original_title,
    overview,
    vote_average,
    vote_count,
    title,
    genres,
    popularity,
  } = fetchedData;
  const markup = ` <button class="modal-card__close-btn" type="button" data-card-modal-close>close
  <svg class="modal__check" width="24" height="24">
        <use href="./img/symbol-defs.svg#icon-close"></use>
     
</button>
<img
    class="modal-card__img"
    src="${posterPath}${poster_path}"
    alt="film-poster"
    width="240"
  />
<p class="modal-card__title">${title}</p>
<ul class="modal-card__film-information-list">
  <div class="modal-card__film-informattion-items-wrrapper">
    <li class="modal-card__film-information-items">Vote / Votes</li>
    <p class="modal-card__film-information__text">${vote_average}/${vote_count}</p>
  </div>
  <div class="modal-card__film-informattion-items-wrrapper">
  <li class="film-information__items">
    Popularity
  </li>
  <p class="film-information__text">${popularity}</p></div>
  <div class="modal-card__film-informattion-items-wrrapper">
    Original Title
  </li>
  <p class="film-information__text">${original_title}</p></div>
  <div class="modal-card__film-informattion-items-wrrapper">
  <li class="film-information__items">
    Genre
  </li>
  <p class="film-information__text">${genres.map(ganre => ganre.name)}</p></div>
</ul>
<p class="modal-card__subtitle">About</p>
<p class="modal-card__text">${overview}
</p></div> <div class="modal-card__btn-wrapper">
<button
  class="modal-card__watched-btn"
  type="button"
  data-card-modal-watched-film
>
  add to Watched
</button>
<button
  class="modal-card__queue-btn"
  type="button"
  data-card-modal-queue-film
>
  add to queue
</button>
</div>`;

  return (modalCardEl.innerHTML = markup);
}
