import { firebaseApp } from './firebase-init';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { refs } from './auth-modal-refs';
import { Notify } from 'notiflix';

const auth = getAuth(firebaseApp);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      console.log('user logged in');

      refs.openModalHomeBtn.classList.add('log-out');
      refs.openModalHomeBtn.setAttribute('title', 'Click to Log Out');
      refs.openModalHomeBtn.classList.remove('log-in');
    } else {
      console.log('user logged out');

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

    console.log(userCredential.user);
    refs.modal.classList.toggle('auth-modal-is-hidden');
    e.target.reset();
    Notify.success('You are registered. Have fun!');
  } catch (err) {
    console.log(err.message);
    if (
      err.message ===
      'Firebase: Password should be at least 6 characters (auth/weak-password).'
    ) {
      Notify.warning('Password should be at least 6 characters');
    }
    if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
      Notify.warning('User with this email is already registered');
    }
    if (err.message === 'Firebase: Error (auth/invalid-email).') {
      Notify.warning('Please enter right email');
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

    console.log(userCredential.user);
    refs.modal.classList.toggle('auth-modal-is-hidden');

    e.target.reset();
    Notify.success('You are loged in. Welcome back!');
  } catch (err) {
    console.log(err.message);
    if (err.message === 'Firebase: Error (auth/missing-password).') {
      Notify.warning('Please enter password');
    }
    if (err.message === 'Firebase: Error (auth/invalid-email).') {
      Notify.warning('Please enter right email');
    }
    if (err.message === 'Firebase: Error (auth/user-not-found).') {
      Notify.warning(
        'User not found. Please check if you entered right email and password'
      );
    }
    if (err.message === 'Firebase: Error (auth/wrong-password).') {
      Notify.warning('You entered wrong password');
    }
  }
};

refs.loginForm.addEventListener('submit', loginEmailPassword);

const logout = async e => {
  if (!e.target.classList.contains('log-out')) {
    return;
  }
  await signOut(auth);
  Notify.success('You are loged out. See you soon');
};

refs.openModalHomeBtn.addEventListener('click', logout);
