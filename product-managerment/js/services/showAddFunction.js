import {
  addProductBtn,
  modalFooterBtn,
  modalTitle,
} from '../controller/elements.js';

const showAddFunction = (event) => {
  if (!event.target) return;
  modalTitle.innerHTML = 'Add Product';
  modalFooterBtn.innerHTML = 'Add';
  modalFooterBtn.dataset.btnType = 'add';
};

addProductBtn.addEventListener('click', showAddFunction);
