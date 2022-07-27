import { myModal } from '../controller/elements.js';

export const closeModal = () => {
  const backdrop = document.querySelector('.modal-backdrop');
  myModal.style.display = 'none';
  myModal.classList.remove('show');
  document.querySelector('body').removeChild(backdrop);
};
