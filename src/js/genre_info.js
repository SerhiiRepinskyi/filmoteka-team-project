import { movieGenresData } from './genres_data';

export default function getGenre(movieIds) {
  const genresNamesArray = [];
  if (movieIds.length === 0) {
    return 'Unknown'
  }
  if (movieIds.length < 3) {
    for (const ganreId of movieIds) {
      movieGenresData.map(movieGenreData => {
        if (movieGenreData.id === ganreId) {
          genresNamesArray.push(movieGenreData.name);
        }
      });
    }
    return genresNamesArray.slice(0, 2).join(', ')
  }
  for (const ganreId of movieIds) {
    movieGenresData.map(movieGenreData => {
      if (movieGenreData.id === ganreId) {
        genresNamesArray.push(movieGenreData.name);
      }
    });
  }
  return genresNamesArray.slice(0, 2).join(', ') + ', Other';
}
