import { modalFooterBtn, modalTitle } from '../controller/elements.js';
import { URL } from '../controller/store/URL.js';
import { fillDataToInput } from './fillDataToInput.js';

export const showUpdateFunction = async (event) => {
  try {
    if (!event.target) return;
    const id = event.target.dataset.id;
    modalTitle.innerHTML = 'Update Product';
    modalFooterBtn.innerHTML = 'Update';
    modalFooterBtn.dataset.btnType = 'update';
    modalFooterBtn.dataset.id = id;

    const product = await fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err.message);
      });

    fillDataToInput(product);
  } catch (error) {
    console.log(error);
  }
};
