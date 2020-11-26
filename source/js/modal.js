const MODAL_SELECTOR = {
  MODAL: '.modal',
  MODAL_CLOSE: 'modal--close',
  BUTTON: '.modal__button',
};

const modal = document.querySelector(MODAL_SELECTOR.MODAL);
const button = modal.querySelector(MODAL_SELECTOR.BUTTON);

function openModal() {
  modal.classList.remove(MODAL_SELECTOR.MODAL_CLOSE);
  button.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.add(MODAL_SELECTOR.MODAL_CLOSE);
  button.removeEventListener('click', closeModal);
}

export {openModal};
