import { renderWatchedList } from './render-watched';

const buttonWatchedEl = document.querySelector('.btn_lib').firstElementChild;
const buttonQueueEl = document.querySelector('.btn_lib').lastElementChild;
const galleryEl = document.querySelector('.library-cards__list');

function handleButtonClick(event) {
  const clickedButton = event.target;
  if (clickedButton === buttonWatchedEl) {
    galleryEl.innerHTML = "";
    renderWatchedList();
    if (!buttonWatchedEl.classList.contains('lib--active')) {
      buttonWatchedEl.classList.add('lib--active');
      buttonQueueEl.classList.remove('lib--active');
    }
  } else if (clickedButton === buttonQueueEl) {
    galleryEl.innerHTML = "";
    if (!buttonQueueEl.classList.contains('lib--active')) {
      buttonWatchedEl.classList.remove('lib--active');
      buttonQueueEl.classList.add('lib--active');
    }
  }
}

buttonWatchedEl.addEventListener('click', handleButtonClick);
buttonQueueEl.addEventListener('click', handleButtonClick);
window.addEventListener('load', renderWatchedList);
