import { openModalTrailer } from './modal-card_markup';
import { FilmAPI } from './api';

const youtubeApi = new FilmAPI();

export function onPlayTreilerClick(e) {
  youtubeApi.youTubeID = localStorage.getItem('LOCALSTORAGE_KEY');
     youtubeApi.fetchYouTube().then(res => {
       console.log(res.results);
       const filterArray = res.results.filter(data =>
         data.name.includes('Official')
       );
       console.log(filterArray);
       openModalTrailer(filterArray[0].key);
     });
}
