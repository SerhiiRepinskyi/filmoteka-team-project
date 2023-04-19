import { refs } from './refs';

const root = document.querySelector(':root');
const header = document.querySelector('.header_container');
export const storageKey = 'theme-preference';

export const onThemeBtnClick = () => {
  // flip current value
  console.log(theme.value);
  theme.value = theme.value === 'light' ? 'dark' : 'light';

  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.body.setAttribute('data-theme', theme.value);
  if (theme.value === 'light') {
    document.body.style.setProperty('--primary-text-color', '#000000');
    document.body.style.setProperty('--primary-background-color', '#f0f0f0'); 
    refs.footerEl.style.setProperty('background-color', '#f7f7f7'); 
    
    if (header) {
      header.style.setProperty('mix-blend-mode', 'multiply');
      header.style.setProperty('background-color', 'none');
    }
  } else {
    document.body.style.setProperty('--primary-text-color', '#f0f0f0');
    document.body.style.setProperty('--primary-background-color', '#131313');
    refs.footerEl.style.setProperty('background-color', '#0c0c0c'); 
    if (header) {
      header.style.setProperty('mix-blend-mode', 'normal');
      header.style.setProperty('background-color', '#ffa225');
    }
  }
  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value);
};

const theme = {
  value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.document.onload = () => {
  document.body.setAttribute('data-theme', theme.value);
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onThemeBtnClick);
};

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
  });
