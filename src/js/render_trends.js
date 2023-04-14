import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

Loading.pulse({
  svgColor: '#b92f2c',
  });
  
const galleryEl = document.querySelector('.cards__list');
const filmTrendsAPI = new FilmAPI();

export default async function fetchPopularMovies() {
  galleryEl.innerHTML = '';
  const fetchedData = await filmTrendsAPI
    .fetchTrending()
    .then(res => res.results);

  console.log('FETCH', fetchedData);

  galleryEl.insertAdjacentHTML('beforeend', await filmCardMarkup(fetchedData));
}
