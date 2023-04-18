import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { createPagination } from './pagination';

const galleryEl = document.querySelector('.cards__list');
export const filmTrendsAPI = new FilmAPI();

export default async function fetchPopularMovies() {
  try {
    const { results, total_results } = await filmTrendsAPI.fetchTrending();
    filmTrendsAPI.page = 1;
    createPagination(2, 1, total_results);

    console.log('FETCH', results);

    galleryEl.innerHTML = '';
    galleryEl.insertAdjacentHTML('beforeend', await filmCardMarkup(results));

    window.removeEventListener('load', fetchPopularMovies);
  } catch (error) {
    console.log(error.message);
  }
}
