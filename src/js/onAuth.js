import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './firebase/firebase-init';
import {refs} from './refs';

export default async function onAuth() {
  const auth = getAuth(firebaseApp);
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        refs.libAuthBtnEl.classList.remove('auth');
        refs.myLibraryBtn.classList.remove('hidden');
      } else {
        refs.libAuthBtnEl.classList.add('auth');
        refs.myLibraryBtn.classList.add('hidden');
      }
    });
  };
  monitorAuthState();
}
