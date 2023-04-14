import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA_jvTDBFxigH1-MQ8KXIj8FRrOjQ98Ohs',
  authDomain: 'filmoteka-3cc43.firebaseapp.com',
  projectId: 'filmoteka-3cc43',
  storageBucket: 'filmoteka-3cc43.appspot.com',
  messagingSenderId: '770721628180',
  appId: '1:770721628180:web:cbfafdabe3c015e686a701',
  measurementId: 'G-2NFMQNRBQR',
  databaseURL:
    'https://filmoteka-3cc43-default-rtdb.europe-west1.firebasedatabase.app',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
