// import { firebaseApp } from './firebase-init';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
//   update,
//   push,
//   remove,
//   get,
// } from 'firebase/database';
// import { refs } from './auth-modal-refs';
// import { FilmAPI } from '../api';
// import { DatabaseAPI } from './database-api';

// // const auth = getAuth(firebaseApp);
// // const database = getDatabase(firebaseApp);

// const watchedBtn = document.querySelector('.watched-btn');
// const showBtn = document.querySelector('.show-btn');
// const delBtn = document.querySelector('.delete-btn');

// const moviesService = new FilmAPI();

// const databaseService = new DatabaseAPI();

// async function addMovieToWatched() {
//   const movieToAdd = await moviesService.fetchDetails(getMovieId());
//   console.log(movieToAdd);
//   databaseService.addToWatched(movieToAdd);
// }

// function getWatchedList() {
//   databaseService.getWatchedList();
// }

// function deleteMovie() {
//   databaseService.removeMovieFromWatched(getMovieId());
// }

// watchedBtn.addEventListener('click', addMovieToWatched);
// showBtn.addEventListener('click', getWatchedList);
// delBtn.addEventListener('click', deleteMovie);

// const getMovieId = () =>
//   Number(
//     document.querySelector('.cards__list').firstElementChild.nextElementSibling
//       .dataset.id
//   );

// // async function addMovieToWatched() {
// //   const user = auth.currentUser;
// //   if (!user) {
// //     console.log('User is not signed in');
// //     return;
// //   }

// //   const userId = user.uid;
// //   const reference = ref(database, 'users_library/' + userId + '/watched/');

// //   const snapshot = await get(reference);
// //   const userWatchedList = snapshot.val() || {};

// //   if (Object.values(userWatchedList).some(movie => movie.id === getMovieId())) {
// //     console.log('Movie already in list');
// //     return;
// //   }

// //   const movieToAdd = await moviesService.fetchDetails(getMovieId());
// //   console.dir(movieToAdd);

// //   const newMovieList = {
// //     ...userWatchedList,
// //     [movieToAdd.id]: movieToAdd,
// //   };

// //   await set(reference, newMovieList);

// //   console.log('Added movie to database');
// // }

// // function addMovieToWatched() {
// //   onAuthStateChanged(auth, async user => {
// //     if (user) {
// //       let userId = user.uid;
// //       const reference = ref(database, 'users_library/' + userId + '/watched/');
// //       const firstMovieInList =
// //         document.querySelector('.cards__list').firstElementChild
// //           .nextElementSibling.dataset.id;

// //       onValue(reference, async snapshot => {
// //       if (snapshot.val() === undefined || snapshot.val() === null) {
// //         return;
// //       }
// //       console.log(Object.values(snapshot.val()));
// //       const userWatchedList = Object.values(snapshot.val());
// //       const movieId = getMovieId();

// //       if (userWatchedList.some(movie => movie.id === getMovieId())) {
// //         console.log('movie alredy in list');
// //         return;
// //       } else {

// //       }
// //       const movieToAdd = await moviesService.fetchDetails(getMovieId());

// //       push(reference, movieToAdd);
// //       console.log('aded movie to database');
// //       userWatchedList.find(async movie => {
// //         if (movie.id === getMovieId()) {
// //           console.log('movie alredy in list');
// //           return;
// //         }
// //       const movieToAdd = moviesService.fetchDetails(getMovieId());
// //       console.dir(movieToAdd);

// //       push(reference, movieToAdd);
// //       console.log('aded movie to database');
// //       });

// //       if (
// //       userWatchedList.find(movie => {
// //         movie.id === getMovieId();
// //       }) !== undefined
// //       ) {
// //         console.log('movie alredy in list');
// //         return;
// //       }
// //       });

// //       const moviesArr = await moviesService.fetchTrending();

// //       const movie = moviesArr.results.find(
// //         movie => (movie.id = firstMovieInList)
// //       );
// //     }
// //   });
// // }

// // const showMe = () => {
// //   onAuthStateChanged(auth, user => {
// //     if (user) {
// //       let userId = user.uid;

// //       const reference = ref(database, 'users_library/' + userId + '/watched/');

// //       onValue(reference, snapshot => {
// //         if (snapshot.val() === undefined || snapshot.val() === null) {
// //           return;
// //         }
// //         console.log(Object.values(snapshot.val()));
// //         return Object.values(snapshot.val());
// //       });
// //     }
// //   });
// // };

// // const getDBEntry = database => {
// // const firstMovieInList = Number(
// //   document.querySelector('.cards__list').firstElementChild.nextElementSibling
// //     .dataset.id
// // );
// //   for (const key in database) {
// //     if (database[key].id === getMovieId()) {
// //       console.log(getMovieId());
// //       console.log(key);
// //       return key;
// //     }
// //   }
// // };

// // const deleteMovie = () => {
// //   onAuthStateChanged(auth, user => {
// //     let userId = user.uid;

// //     const reference = ref(database, 'users_library/' + userId + '/watched/');

// //     onValue(reference, snapshot => {
// //       if (snapshot.val() === undefined || snapshot.val() === null) {
// //         return;
// //       }

// //       const newRef = ref(
// //         database,
// //         `users_library/${userId}/watched/${getDBEntry(snapshot.val())}`
// //       );

// //       console.log(
// //         `users_library/${userId}/watched/${getDBEntry(snapshot.val())}`
// //       );

// //       remove(newRef);
// //     });
// //   });
// // };

// // function getName(userId) {
// //   const referenceName = ref(database, 'users/' + userId);
// //   onValue(referenceName, snapshot => {
// //     console.log(snapshot.val());
// //   });
// // }

// // getName('MaxK');

// // const monitorAuthState = () => {
// //   onAuthStateChanged(auth, user => {
// //     if (user) {
// //       console.log(user.uid);
// //       console.log('user logged in');
// //     } else {
// //       console.log('user logged out');
// //     }
// //   });
// // };
// // monitorAuthState();

// // function writeUserData(userId, name, email, imageUrl) {
// //   const reference = ref(database, 'users/' + userId);

// //   set(reference, {
// //     username: name,
// //     email: email,
// //     profile_picture: imageUrl,
// //   });
// // }

// // writeUserData('MaxK', 'Max Kotyk', 'm@mail.com', 'img');
