import { FilmAPI } from './api';
import fetchModalCard from './modal-card';

const modalCard = document.querySelector('.modal-card__backdrop');
const galeryList = document.querySelector('.cards__list');
const body = document.querySelector('body');

const modalCardAPI = new FilmAPI();
galeryList.addEventListener('click', selectedFilm);

function selectedFilm(evt) {
  // if (
  //   clickTarget !== 'IMG' &&
  //   clickTarget !== 'H2' &&
  //   clickTarget !== 'LI' &&
  //   clickTarget !== 'P'
  // ) {
  //   return;
  // }
  let liId = evt.target.closest('.card-item').dataset.id;

  localStorage.setItem('LOCALSTORAGE_KEY', `${liId}`);
  console.log(modalCardAPI.detailsID);
  console.log(localStorage.getItem('LOCALSTORAGE_KEY'));
  modalCard.classList.remove('hidden');
  fetchModalCard();
}
window.addEventListener('keydown', handleEscKeyDown);

function handleEscKeyDown(event) {
  if (event.code === 'Escape') {
    modalCard.classList.toggle('hidden');
  }
}
