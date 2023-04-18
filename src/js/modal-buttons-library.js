import { DatabaseAPI } from './firebase/database-api';
import { FilmAPI } from './api';
import { Notify } from 'notiflix';

const filmAPI = new FilmAPI();
const databaseAPI = new DatabaseAPI();

const galeryList = document.querySelector('.library-cards__list');
const modalCard = document.querySelector('.modal-card');
let movieId = '';

const switchWatchedBtnToRemove = () => {
  setTimeout(() => {
    const watchedBtn = document.querySelector('[data-card-modal-watched-film]');
    watchedBtn.classList.remove('add-to-watched');
    watchedBtn.classList.add('remove-from-watched');
    watchedBtn.textContent = 'Remove from watched';
  }, 150);
};

const switchQueueButtonToRemove = () => {
  setTimeout(() => {
    const queueBtn = document.querySelector('[data-card-modal-queue-film]');
    queueBtn.classList.remove('add-to-queue');
    queueBtn.classList.add('remove-from-queue');
    queueBtn.textContent = 'Remove from queue';
  }, 150);
};

const switchWatchedBtnToAdd = () => {
  setTimeout(() => {
    const watchedBtn = document.querySelector('[data-card-modal-watched-film]');
    watchedBtn.classList.remove('remove-from-watched');
    watchedBtn.classList.add('add-to-watched');
    watchedBtn.textContent = 'Add to watched';
  }, 150);
};

const switchQueueButtonToAdd = () => {
  setTimeout(() => {
    const queueBtn = document.querySelector('[data-card-modal-queue-film]');
    queueBtn.classList.remove('remove-from-queue');
    queueBtn.classList.add('add-to-queue');
    queueBtn.textContent = 'Add to queue';
  }, 150);
};

export const checkList = async e => {
  if (!e.target.closest('.card-item')) {
    return;
  }

  try {
    movieId = Number(e.target.closest('.card-item').dataset.id);
    const presentInWatched = await databaseAPI.checkPresenseInWatched(movieId);
    if (presentInWatched) {
      switchWatchedBtnToRemove();
    } else if (!presentInWatched) {
      switchWatchedBtnToAdd();
    }
    const presentInQueue = await databaseAPI.checkPresenseInQueue(movieId);
    if (presentInQueue) {
      switchQueueButtonToRemove();
    } else if (!presentInQueue) {
      switchQueueButtonToAdd();
    }
  } catch (error) {
    Notify.failure('Ooops! Something went wrong. Try reloading page');
  }
};

export const addMovies = async e => {
  if ('cardModalWatchedFilm' in e.target.dataset) {
    try {
      if (e.target.classList.contains('add-to-watched')) {
        const movieObj = await filmAPI.fetchDetails(movieId);
        await databaseAPI.addToWatched(movieObj);
        Notify.success(`${movieObj.title} added to Watched List`);
        switchWatchedBtnToRemove();
        const presentInQueue = await databaseAPI.checkPresenseInQueue(movieId);
        if (presentInQueue) {
          switchQueueButtonToAdd();
          await databaseAPI.removeMovieFromQueue(movieId);
          Notify.success(`${movieObj.title} removed from Queue List`);
        }
      }
    } catch (error) {
      Notify.failure('Ooops! Something went wrong. Try reloading page');
    }
  } else if ('cardModalQueueFilm' in e.target.dataset) {
    try {
      if (e.target.classList.contains('add-to-queue')) {
        const movieObj = await filmAPI.fetchDetails(movieId);
        await databaseAPI.addToQueue(movieObj);
        Notify.success(`${movieObj.title} added to Queue List`);
        switchQueueButtonToRemove();
        const presentInWatched = await databaseAPI.checkPresenseInWatched(
          movieId
        );
        if (presentInWatched) {
          switchWatchedBtnToAdd();
          await databaseAPI.removeMovieFromWatched(movieId);
          Notify.success(`${movieObj.title} removed from Watched List`);
        }
      }
    } catch (error) {
      Notify.failure('Ooops! Something went wrong. Try reloading page');
    }
  }
};

export const removeMovies = async e => {
  try {
    if ('cardModalWatchedFilm' in e.target.dataset) {
      if (e.target.classList.contains('remove-from-watched')) {
        await databaseAPI.removeMovieFromWatched(movieId);
        Notify.success(`Movie removed from Watched List`);

        switchWatchedBtnToAdd();
      }
    } else if ('cardModalQueueFilm' in e.target.dataset) {
      if (e.target.classList.contains('remove-from-queue')) {
        await databaseAPI.removeMovieFromQueue(movieId);
        Notify.success(`Movie removed from Queue List`);

        switchQueueButtonToAdd();
      }
    }
  } catch (error) {
    console.log(error);
    Notify.failure('Ooops! Something went wrong. Try reloading page');
  }
};

galeryList.addEventListener('click', checkList);
modalCard.addEventListener('click', addMovies);
modalCard.addEventListener('click', removeMovies);
