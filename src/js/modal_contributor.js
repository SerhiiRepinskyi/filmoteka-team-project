const openModalContributorsBtn = document.querySelector('.footer__link');
const closeModalContributorsBtn = document.querySelector(
  '.modal-contributors__close-btn'
);
const modalContributors = document.querySelector(
  '.modal-contributors-backdrop'
);

openModalContributorsBtn.addEventListener('click', openModalContributor);
closeModalContributorsBtn.addEventListener('click', closeModalContributor);

function openModalContributor() {
  modalContributors.classList.remove('modal-contributors-backdrop--is-hidden');
  document.body.classList.add('body-no-scroll');
  document.addEventListener('keydown', closeModalByEscBtn);
  modalContributors.addEventListener('click', closeModalByClickOnBackdrop);
}

function closeModalContributor() {
  modalContributors.classList.add('modal-contributors-backdrop--is-hidden');
  document.body.classList.remove('body-no-scroll');
  document.removeEventListener('keydown', closeModalByEscBtn);
  modalContributors.removeEventListener('click', closeModalByClickOnBackdrop);
}

function closeModalByEscBtn(event) {
  if (event.code === 'Escape') {
    closeModalContributor();
  }
}

function closeModalByClickOnBackdrop(event) {
  if (event.target === modalContributors) {
    closeModalContributor();
  }
}
