import { refs } from './auth-modal-refs';

const switchFormsOnClick = () => {
  refs.loginForm.classList.toggle('login-hidden');
  refs.registerForm.classList.toggle('register-hidden');
};

refs.showLoginBtn.addEventListener('click', switchFormsOnClick);
refs.showRegisterBtn.addEventListener('click', switchFormsOnClick);

const toggleModal = e => {
  if (e.target.classList.contains('log-in')) {
    refs.modal.classList.remove('auth-modal-is-hidden');
  } else if (e.target.classList.contains('auth-modal-close')) {
    refs.modal.classList.add('auth-modal-is-hidden');
  }
};

refs.openModalHomeBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
