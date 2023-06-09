import { firebaseApp, auth } from './firebase-init';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { refs } from './auth-modal-refs';
import { Notify, Confirm } from 'notiflix';

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      refs.openModalHomeBtn.classList.add('log-out');
      refs.openModalHomeBtn.setAttribute('title', 'Click to Log Out');
      refs.openModalHomeBtn.classList.remove('log-in');
    } else {
      refs.openModalHomeBtn.classList.remove('log-out');
      refs.openModalHomeBtn.setAttribute('title', 'Click to Log In');
      refs.openModalHomeBtn.classList.add('log-in');
    }
  });
};
monitorAuthState();

const createAccount = async e => {
  e.preventDefault();

  const regEmail = refs.registerEmail.value;
  const regPassword = refs.registerPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      regEmail,
      regPassword
    );

    refs.modal.classList.toggle('auth-modal-is-hidden');
    e.target.reset();
    Notify.success('You have successfully registered and logged in. Have fun!');
  } catch (err) {
    if (
      err.message ===
      'Firebase: Password should be at least 6 characters (auth/weak-password).'
    ) {
      Notify.warning('Password should be at least 6 characters');
    }
    if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
      Notify.warning('An account is already registered with this email');
    }
    if (err.message === 'Firebase: Error (auth/invalid-email).') {
      Notify.warning('Please enter valid email address');
    }
    if (err.message === 'Firebase: Error (auth/missing-password).') {
      Notify.warning('Please enter password');
    }
  }
};

refs.registerForm.addEventListener('submit', createAccount);

const loginEmailPassword = async e => {
  e.preventDefault();

  const regEmail = refs.loginEmail.value;
  const regPassword = refs.loginPassword.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      regEmail,
      regPassword
    );

    refs.modal.classList.toggle('auth-modal-is-hidden');

    e.target.reset();
    Notify.success('You have logged in. Welcome back!');
  } catch (err) {
    if (err.message === 'Firebase: Error (auth/missing-password).') {
      Notify.warning('Please enter password');
    }
    if (err.message === 'Firebase: Error (auth/invalid-email).') {
      Notify.warning('Please enter valid email address');
    }
    if (err.message === 'Firebase: Error (auth/user-not-found).') {
      Notify.warning(
        'User not found. Please check if you entered valid email address and password'
      );
    }
    if (err.message === 'Firebase: Error (auth/wrong-password).') {
      Notify.warning('You have entered incorrect password');
    }
  }
};

refs.loginForm.addEventListener('submit', loginEmailPassword);

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
      Notify.success('You have been logged out. See you soon');
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

refs.openModalHomeBtn.addEventListener('click', logout);
