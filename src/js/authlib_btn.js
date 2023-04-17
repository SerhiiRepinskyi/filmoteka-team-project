// import { firebaseApp } from './firebase/firebase-init';
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';

const libAuthBtnEl = document.querySelector('.auth_lib');

console.log(libAuthBtnEl);

const isAuthenticated = false;

// const isAuthenticated = true;

if (isAuthenticated) {
  libAuthBtnEl.classList.remove('auth');
} else {
  libAuthBtnEl.classList.add('auth');
}




  