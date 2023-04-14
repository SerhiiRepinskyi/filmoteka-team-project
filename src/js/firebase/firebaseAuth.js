import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseApp, database, auth } from './firebaseInit';
import { refs } from './signInModalRefs';

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
  } catch (err) {
    console.log(err);
  }
};

refs.registerForm.addEventListener('submit', createAccount);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      console.log('user logged in');
      refs.openModalBtn.classList.add('visually-hidden');
      refs.logoutBtn.classList.remove('visually-hidden');
    } else {
      console.log('user logged out');
      refs.openModalBtn.classList.remove('visually-hidden');
      refs.logoutBtn.classList.add('visually-hidden');
    }
  });
};
monitorAuthState();

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
  } catch (err) {
    console.log(err);
  }
};

refs.loginForm.addEventListener('submit', loginEmailPassword);

const logout = async () => {
  await signOut(auth);
};

refs.logoutBtn.addEventListener('click', logout);
