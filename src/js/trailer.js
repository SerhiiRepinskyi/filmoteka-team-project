import { openModalTrailer } from './modal-card_markup';
import { FilmAPI } from './api';

const youtubeApi = new FilmAPI();

export function onPlayTreilerClick(e) {
  youtubeApi.youTubeID = localStorage.getItem('LOCALSTORAGE_KEY');
     youtubeApi.fetchYouTube().then(res => {
       
       const filterArray = res.results.filter(data =>
         data.name.includes('Official')
       );
       
       openModalTrailer(filterArray[0].key);
     });
}
