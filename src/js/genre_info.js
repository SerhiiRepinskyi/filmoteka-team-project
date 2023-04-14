import { movieGenresData } from './genres_data';

export default function getGenre(movieIds) {
  const genresNamesArray = [];
  for (const ganreId of movieIds) {
    movieGenresData.map(movieGenreData => {
      if (movieGenreData.id === ganreId) {
        genresNamesArray.push(movieGenreData.name);
      }
    });
  }
  return genresNamesArray.slice(0, 2).join(', ') + ', Other';
}
