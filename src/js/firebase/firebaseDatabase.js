import { firebaseApp } from './firebaseInit';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  push,
} from 'firebase/database';
import { refs } from './signInModalRefs';
import { FilmAPI } from '../api';

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const watchedBtn = document.querySelector('.watched-btn');

const moviesService = new FilmAPI();

watchedBtn.addEventListener('click', addMovieToWatched);

function addMovieToWatched() {
  onAuthStateChanged(auth, async user => {
    if (user) {
      let userId = user.uid;
      const firstMovieInList =
        document.querySelector('.cards__list').firstElementChild.dataset.id;
      console.log('aded movie to database');
      console.log(document.querySelector('.cards__list').firstElementChild);
      console.log(firstMovieInList);
      // const moviesArr = await moviesService.fetchTrending();

      // const movie = moviesArr.results.find(
      //   movie => (movie.id = firstMovieInList)
      // );

      const movie = await moviesService.fetchDetails(firstMovieInList);
      console.dir(movie);

      const reference = ref(database, 'users_library/' + userId + '/watched/');

      push(reference, movie);
      onValue(reference, snapshot => {
        console.log(Object.values(snapshot.val()));
      });
    }
  });
}

// function getName(userId) {
//   const referenceName = ref(database, 'users/' + userId);
//   onValue(referenceName, snapshot => {
//     console.log(snapshot.val());
//   });
// }

// getName('MaxK');

// const monitorAuthState = () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user.uid);
//       console.log('user logged in');
//     } else {
//       console.log('user logged out');
//     }
//   });
// };
// monitorAuthState();

// function writeUserData(userId, name, email, imageUrl) {
//   const reference = ref(database, 'users/' + userId);

//   set(reference, {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// writeUserData('MaxK', 'Max Kotyk', 'm@mail.com', 'img');
