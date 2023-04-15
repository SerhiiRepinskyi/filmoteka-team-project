const root = document.querySelector(':root');
// const themePickerBtn = document.querySelector('[data-theme-btn]');

// const myTheme = localStorage.getItem('Theme');
// themePickerBtn.dataset.themeBtn = myTheme;
// function setVariables(e) {

//   const theme = e.target.dataset.themeBtn;
//   localStorage.setItem('Theme', theme);
//   console.log(e.target.dataset.themeBtn);

  
// }

// themePickerBtn.addEventListener('click', setVariables);
reflectPreference();

window.document.onload = () => {
  // document.body.setAttribute('data-theme', theme.value);
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector('#theme-toggle').addEventListener('click', onClick);
};

const storageKey = 'theme-preference';

const onClick = () => {
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
    root.style.setProperty('--primary-text-color', '#000000');
    root.style.setProperty('--primary-background-color', '#f0f0f0');
  } else {
    root.style.setProperty('--primary-text-color', '#f0f0f0');
    root.style.setProperty('--primary-background-color', '#131313');
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





// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
  });
  