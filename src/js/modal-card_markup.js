import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { FilmAPI } from './api';

const apiA = new FilmAPI();
export function openModalTrailer(url) {
  console.log(url, 'url');
  const instance = basicLightbox.create(
    `<iframe
      width="960"
      height="515"
      src="https://www.youtube.com/embed/${url}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`
  );

  instance.show();
}
