import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { filmTrendsAPI } from './render_trends';
import  fetchPopularMovies  from './render_trends';
import  renderSerchMovies  from './search_film';
import { filmSerchsAPI } from './search_film';

let currentPage = 1;


export  function createPagination(option1, option2, totalItems) {
   const paginationOptions = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,
    
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };
  
   const pagination = new Pagination('pagination', paginationOptions);

  
  if (option1 === 1) {
    pagination.reset();
    // pagination.movePageTo(1);
  }
  if (option1 === 2) {
    pagination.reset();
    pagination.movePageTo(currentPage);
  }
  if (option2 === 1) {
    pagination.on('beforeMove', function(event) {
      
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
               
      renderSerchMovies(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  }
   
};

