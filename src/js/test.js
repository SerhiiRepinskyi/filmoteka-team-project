// import library
import fetchPopularMovies from './render_trends';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './firebase/firebase-init';
import { renderWatchedList } from './render-watched';
// base code
// ...

// const filmTrendsAPI = new filmAPI();
// const fetchedTrends = filmTrendsAPI.fetchTrending().then((res) => console.log(res));
// console.log(fetchedTrends);
const myLibraryBtn = document.querySelector('.lib__btn');
window.addEventListener('load', fetchPopularMovies);
window.addEventListener('load', onAuth);

async function onAuth() {
  const auth = getAuth(firebaseApp);
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        myLibraryBtn.classList.remove('hidden');
      } else {
        myLibraryBtn.classList.add('hidden');
      }
    });
  };
  monitorAuthState();
}


