import { refs } from './signInModalRefs';

const switchFormsOnClick = () => {
  refs.loginForm.classList.toggle('login-hidden');
  refs.registerForm.classList.toggle('register-hidden');
};

refs.showLoginBtn.addEventListener('click', switchFormsOnClick);
refs.showRegisterBtn.addEventListener('click', switchFormsOnClick);

const toggleModal = () => {
  refs.modal.classList.toggle('auth-modal-is-hidden');
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
