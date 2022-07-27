import { addProduct } from '../view/addProduct.js';
import { updateProduct } from '../view/updateProduct.js';
import { modalFooterBtn } from './elements.js';

modalFooterBtn.addEventListener('click', function (event) {
  const id = event.target.dataset.id;
  switch (event.target.dataset.btnType) {
    case 'add':
      addProduct();
      break;
    case 'update':
      updateProduct(id);
    default:
      break;
  }
});
