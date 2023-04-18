import { movieGenresData } from './genres_data';

export function getGenresLib(genres) {
  if (!genres) {
    return 'Unknown';
  } else {
    if (genres.length < 3) {
      return genres
        .map(genre => genre.name)
        .slice(0, 2)
        .join(', ');
    }
    return (
      genres
        .map(genre => genre.name)
        .slice(0, 2)
        .join(', ') + ', Other'
    );
  }
}

export function getReleaseDate(release_date) {
  if (release_date === '') {
    return (release_date = '----');
  }
  return release_date.slice(0, 4);
}

export function getMovieTitle(title) {
  let movieTitle = title;
  if (title.length > 34) {
    return (movieTitle = `${title.slice(0, 34)}...`);
  }
  return movieTitle;
}

export function getMoviePoster(poster_path) {
  let moviePoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (!poster_path) {
    moviePoster =
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png';
  }
  return moviePoster;
}

export function getGenres(movieGenreIds) {
    const genresNamesArray = [];
    if (movieGenreIds.length === 0) {
      return 'Unknown'
    }
    if (movieGenreIds.length < 3) {
      for (const ganreId of movieGenreIds) {
        movieGenresData.map(movieGenreData => {
          if (movieGenreData.id === ganreId) {
            genresNamesArray.push(movieGenreData.name);
          }
        });
      }
      return genresNamesArray.slice(0, 2).join(', ')
    }
    for (const ganreId of movieGenreIds) {
      movieGenresData.map(movieGenreData => {
        if (movieGenreData.id === ganreId) {
          genresNamesArray.push(movieGenreData.name);
        }
      });
    }
    return genresNamesArray.slice(0, 2).join(', ') + ', Other';
  }
  