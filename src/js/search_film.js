import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import fetchPopularMovies from './render_trends';

Loading.pulse({
  svgColor: '#b92f2c',
});

const filmTrendsAPI = new FilmAPI();

const galleryEl = document.querySelector('.cards__list');
const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input');
console.log(form);

form.addEventListener('submit', serch);
input.addEventListener('input', inputValue);

function inputValue(e) {
  console.log(e.data);
  if (input.value.length === 0) {
    fetchPopularMovies();
  }
}

async function serch(e) {
  e.preventDefault();
  fetchPopularMovies();
  if (input.value.length === 0) {
    return;
  }
  filmTrendsAPI.query = input.value;

  const fetchedData = await filmTrendsAPI
    .fetchSearhMovies()
    .then(res => res.results);

  console.log('FETCH', fetchedData);

  galleryEl.innerHTML = await filmCardMarkup(fetchedData);
}
