import { FilmAPI } from './api';
import fetchModalCard from './modal-card_render';

const modalCardBackdrop = document.querySelector('.modal-card__backdrop');
const galeryList = document.querySelector('.cards__list');
const body = document.querySelector('body');
const modalCard = document.querySelector('.modal-card');

const btnCloseModalEl = document.querySelector('.modal-card__close-btn');
const modalCardAPI = new FilmAPI();
galeryList.addEventListener('click', getMovieObjOnClick);

async function getMovieObjOnClick(evt) {
  console.log(evt.target.closest('.cart-items'));
  modalCardAPI.youTubeID = evt.target.closest('.card-item').dataset.id;
  localStorage.setItem(
    'LOCALSTORAGE_KEY',
    `${evt.target.closest('.card-item').dataset.id}`
  );
  if (!evt.target.closest('.card-item')) {
    return;
  }
  let liId = evt.target.closest('.card-item').dataset.id;
  const movieObj = await modalCardAPI.fetchDetails(liId);
  fetchModalCard(movieObj);
  body.classList.add('no-scroll');
  modalCardBackdrop.classList.remove('hidden');
}

window.addEventListener('keydown', handleEscKeyDown);

function handleEscKeyDown(event) {
  if (event.code === 'Escape') {
    body.classList.remove('no-scroll');
    modalCardBackdrop.classList.add('hidden');
  }
}
btnCloseModalEl.addEventListener('click', evt => {
  body.classList.remove('no-scroll');
  modalCardBackdrop.classList.add('hidden');
});

modalCardBackdrop.addEventListener('click', e => {
  if (e.target === modalCardBackdrop) {
    modalCardBackdrop.classList.add('hidden');
    body.classList.remove('no-scroll');
  }
});

export {
  modalCardBackdrop,
  btnCloseModalEl,
  handleEscKeyDown,
  body,
  modalCard,
  getMovieObjOnClick,
};
