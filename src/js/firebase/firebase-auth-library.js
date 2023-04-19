import { firebaseApp } from './firebase-init';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { refs } from './auth-modal-refs';
import { Notify, Confirm } from 'notiflix';

const auth = getAuth(firebaseApp);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      refs.openModalLibraryBtn.classList.add('log-out');
      refs.openModalLibraryBtn.setAttribute('title', 'Click to Log Out');
      refs.openModalLibraryBtn.classList.remove('log-in');
    } else {
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
  Confirm.show(
    'You are about to log out.',
    'Proceed?',
    'Log Out',
    'Stay Logged In',
    async () => {
      await signOut(auth);
      Notify.success(
        'You are loged out. See you soon. Redirecting to frontpage'
      );
      setTimeout(() => window.location.replace('./index.html'), 2000);
    },
    () => {
      return;
    },
    {
      titleColor: '#b92f2c',
      fontFamily: 'Roboto, sans-serif;',
      borderRadius: '10px',
      okButtonBackground: '#b92f2c',
    }
  );
};

refs.openModalLibraryBtn.addEventListener('click', logout);
