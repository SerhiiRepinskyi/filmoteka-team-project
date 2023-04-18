import { firebaseApp } from './firebase-init';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { refs } from './auth-modal-refs';
import { Notify } from 'notiflix';

const auth = getAuth(firebaseApp);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      console.log('user logged in');

      refs.openModalLibraryBtn.classList.add('log-out');
      refs.openModalLibraryBtn.setAttribute('title', 'Click to Log Out');
      refs.openModalLibraryBtn.classList.remove('log-in');
    } else {
      console.log('user logged out');

      refs.openModalLibraryBtn.classList.remove('log-out');
      refs.openModalLibraryBtn.setAttribute('title', 'Click to Log In');
      refs.openModalLibraryBtn.classList.add('log-in');
    }
  });
};
monitorAuthState();

const logout = async e => {
  if (!e.target.classList.contains('log-out')) {
    return;
  }
  await signOut(auth);
  Notify.success('You are loged out. See you soon');

  setTimeout(() => window.location.replace('./index.html'), 2000);
};

refs.openModalLibraryBtn.addEventListener('click', logout);
