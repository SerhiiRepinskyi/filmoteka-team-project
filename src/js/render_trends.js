import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';


  
const galleryEl = document.querySelector('.cards__list');
const filmTrendsAPI = new FilmAPI();
const trendsMovieEl = document.querySelector('.trends__movie');
export default async function fetchPopularMovies() {
  
  
  galleryEl.innerHTML = '';
  
  const fetchedData = await filmTrendsAPI
    .fetchTrending()
    .then(res => res.results);

  console.log('FETCH', fetchedData);

  galleryEl.insertAdjacentHTML('beforeend', await filmCardMarkup(fetchedData));
  window.removeEventListener('load', fetchPopularMovies);
  
}
