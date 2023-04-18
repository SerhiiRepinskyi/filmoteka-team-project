import { renderWatchedList } from './render-watched';
import { renderQueueList } from './render-queue';
import {refs} from './refs';

function handleButtonClick(event) {
  const clickedButton = event.target;
  if (clickedButton === refs.buttonWatchedEl) {
    refs.libGalleryEl.innerHTML = '';
    renderWatchedList();
    if (!refs.buttonWatchedEl.classList.contains('lib--active')) {
      refs.buttonWatchedEl.classList.add('lib--active');
      refs.buttonQueueEl.classList.remove('lib--active');
    }
  } else if (clickedButton === refs.buttonQueueEl) {
    refs.libGalleryEl.innerHTML = '';
    renderQueueList();
    if (!refs.buttonQueueEl.classList.contains('lib--active')) {
      refs.buttonWatchedEl.classList.remove('lib--active');
      refs.buttonQueueEl.classList.add('lib--active');
    }
  }
}

refs.buttonWatchedEl.addEventListener('click', handleButtonClick);
refs.buttonQueueEl.addEventListener('click', handleButtonClick);
window.addEventListener('load', renderWatchedList);
