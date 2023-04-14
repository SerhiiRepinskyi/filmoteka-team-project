// import library
import fetchPopularMovies from './render_trends';
// base code
// ...

// const filmTrendsAPI = new filmAPI();
// const fetchedTrends = filmTrendsAPI.fetchTrending().then((res) => console.log(res));
// console.log(fetchedTrends);

window.addEventListener('load', fetchPopularMovies);
