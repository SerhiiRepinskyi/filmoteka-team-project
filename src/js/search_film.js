import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import fetchPopularMovies from './render_trends';
import Notiflix from 'notiflix';

Loading.pulse({
  svgColor: '#b92f2c',
});

const filmTrendsAPI = new FilmAPI();

const galleryEl = document.querySelector('.cards__list');
const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input');
const message = document.querySelector('.header-home-warning');
message.style.display = 'none';
// console.log(form);

form.addEventListener('submit', serch);
input.addEventListener('input', inputValue);

function inputValue(e) {
  // console.log(e.data);
  if (input.value.length === 0) {
    fetchPopularMovies();
  }
}

async function serch(e) {
  e.preventDefault();
  fetchPopularMovies();
  // if (input.value.length === 0) {
  //   return;
  // }
  const query = input.value.trim();
  if (query === '') {
    showsNotification();
    hidesNotification();
    return info();
  }

  filmTrendsAPI.query = input.value;

  const fetchedData = await filmTrendsAPI.fetchSearhMovies()
    .then(res => res.results)

    if (fetchedData.length === 0) {
        showsNotification();
        hidesNotification();
        return warning();
      }
  // console.log('FETCH', fetchedData);
  galleryEl.innerHTML = await filmCardMarkup(fetchedData);
}


function info() {
  Notiflix.Notify.info('Enter your data to search.');
}

function warning() {
  Notiflix.Notify.failure(
    "The film with such a title does not exist."
  );
}

function showsNotification() {
  setTimeout(() => {
    message.style.display = 'block';
    message.style.color = '#ffffff';
  }, 1000);
}

function hidesNotification() {
  setTimeout(() => {
    message.style.display = 'none';
  }, 4000);
}


