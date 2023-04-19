import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { FilmAPI } from './api';
import { handleEscKeyDown } from './modal-card_open';

const apiA = new FilmAPI();
export function openModalTrailer(url) {
  const instance = basicLightbox.create(
    `<iframe
      width="960"
      height="515"
      src="https://www.youtube.com/embed/${url}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`,
    {
      onShow: instance => {
        window.removeEventListener('keydown', handleEscKeyDown);
        window.addEventListener('keydown', closeTrailerByEsc);
      },
      onClose: instance => {
        window.addEventListener('keydown', handleEscKeyDown);
        window.removeEventListener('keydown', closeTrailerByEsc);
      },
    }
  );

  instance.show();

  function closeTrailerByEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
