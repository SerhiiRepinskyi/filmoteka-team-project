export class FilmAPI {
  #API_KEY = 'f6b5dfee4ed71b77313e17116e40108d';
  #BASE_URL = 'https://api.themoviedb.org/3';

  query = null;
  page = 1;
  // detailsID = 3;
  youTubeID = 3;

  async fetchTrending() {
    const responce = await fetch(
      `${this.#BASE_URL}/trending/movie/week?api_key=${this.#API_KEY}&page=${this.page}`
    );
    const trending = await responce.json();
    return trending;
  }

  async fetchSearhMovies() {
    const responce = await fetch(
      `${this.#BASE_URL}/search/movie?api_key=${
        this.#API_KEY
      }&language=en-US&page=1&include_adult=false&query=${this.query}&page=${
        this.page
      }`
    );
    const movie = await responce.json();
    return movie;
  }

  async fetchDetails(detailsID) {
    const responce = await fetch(
      `${this.#BASE_URL}/movie/${detailsID}?api_key=${
        this.#API_KEY
      }&language=en-US`
    );
    const details = await responce.json();
    return details;
  }

  // async fetchDetails() {
  //   const responce = await fetch(
  //     `${this.#BASE_URL}/movie/${this.detailsID}?api_key=${
  //       this.#API_KEY
  //     }&language=en-US`
  //   );
  //   const details = await responce.json();
  //   return details;
  // }

  async fetchYouTube() {
    const responce = await fetch(
      `${this.#BASE_URL}/movie/${this.youTubeID}/videos?api_key=${
        this.#API_KEY
      }&language=en-US`
    );
    const youTubeTrailer = await responce.json();
    return youTubeTrailer;
  }
}

// const test = new FilmAPI();
// test.fetchYouTube().then(res => console.log(res));
