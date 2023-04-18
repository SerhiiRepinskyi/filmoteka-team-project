import onAuth from './onAuth';
import { onThemeBtnClick } from './themse-picker';
window.addEventListener('load', onAuth);
document
  .querySelector('#theme-toggle')
  .addEventListener('click', onThemeBtnClick);
