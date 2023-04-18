import { FilmAPI } from './api';
import { filmCardMarkup } from './card_markup';
import { createPagination } from './pagination';
import refs from './refs';

export const filmTrendsAPI = new FilmAPI();

export default async function fetchPopularMovies(option1) {
  try {
    const { results, total_results } = await filmTrendsAPI.fetchTrending();
    filmTrendsAPI.page = 1;
    createPagination(option1, 1, total_results);

    console.log('FETCH', results);

    refs.galleryEl.innerHTML = '';
    refs.galleryEl.insertAdjacentHTML('beforeend', await filmCardMarkup(results));

    window.removeEventListener('load', fetchPopularMovies);
  } catch (error) {
    console.log(error.message);
  }
}
