import fetchModalCard from './modal-card';
const modalCard = document.querySelector('.modal-card__backdrop');
const galeryList = document.querySelector('.cards__list');
const body = document.querySelector('body');
console.log(body);

galeryList.addEventListener('click', selectFilm);
function selectFilm(evt) {
  console.log(evt.target);
  let clickTarget = evt.target.nodeName;
  if (
    clickTarget !== 'IMG' &&
    clickTarget !== 'H2' &&
    clickTarget !== 'LI' &&
    clickTarget !== 'P'
  ) {
    return;
  }
  modalCard.classList.remove('hidden');
  fetchModalCard();
}
window.addEventListener('keydown', handleEscKeyDown);

function handleEscKeyDown(event) {
  if (event.code === 'Escape') {
    modalCard.classList.toggle('hidden');
  }
}
