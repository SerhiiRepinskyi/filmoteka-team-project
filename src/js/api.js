export class FilmAPI {
  #API_KEY = 'f6b5dfee4ed71b77313e17116e40108d';
  #BASE_URL = 'https://api.themoviedb.org/3';

  query = null;
  page = 1;
  detailsID = 600;
  youTubeID = 3;

  fetchTrending() {
    return fetch(
      `${this.#BASE_URL}/trending/movie/week?api_key=${this.#API_KEY}`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  }

  fetchMovies() {
    return fetch(
      `${this.#BASE_URL}/search/movie?api_key=${
        this.#API_KEY
      }&language=en-US&page=1&include_adult=false&query=${this.query}&page=${
        this.page
      }`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  }

  fetchDetails() {
    return fetch(
      `${this.#BASE_URL}/movie/${this.detailsID}?api_key=${
        this.#API_KEY
      }&language=en-US`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  }

  fetchYouTube() {
    return fetch(
      `${this.#BASE_URL}/movie/${this.youTubeID}/videos?api_key=${
        this.#API_KEY
      }&language=en-US`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
  }
}

// const test = new filmAPI();
// test.fetchTrending().then((res) => console.log(res));
