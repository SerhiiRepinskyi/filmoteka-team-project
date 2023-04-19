import Pagination from 'tui-pagination';
import { filmTrendsAPI } from './render_trends';
import fetchPopularMovies from './render_trends';
import renderSerchMovies from './search_film';
import { filmSerchsAPI } from './search_film';

let currentPage = 1;

export function createPagination(option1, option2, totalItems) {
  const paginationOptions = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,

  };

  const pagination = new Pagination('pagination', paginationOptions);

  if (option1 === 1) {
    pagination.reset();
  }

  if (option2 === 1) {
    pagination.on('beforeMove', function (event) {
      currentPage = event.page;
      filmTrendsAPI.page = event.page;

      fetchPopularMovies();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (option2 === 2) {
    pagination.on('beforeMove', event => {
      currentPage = event.page;
      filmSerchsAPI.page = event.page;

      renderSerchMovies();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
