import ProductItem from '../model/ProductItem.js';
import putApiProduct from '../model/putApiProduct.js';
import { closeModal } from '../services/closeModal.js';
import { getDataFromInput } from '../services/getDataFromInput.js';
import { resetForm } from '../services/resetForm.js';
import { checkValidation } from '../services/validation.js';
import { initProductsList } from './initProductList.js';

export const updateProduct = async (id) => {
  try {
    const { name, type, price, image, desc } = getDataFromInput();

    const isValidInput = checkValidation(name, type, price, image, desc);
    if (!isValidInput) return;

    const updatedProduct = new ProductItem(id, name, type, price, image, desc);

    await putApiProduct(updatedProduct).then(() =>
      initProductsList()
        .then(() => resetForm())
        .then(() => closeModal())
    );
  } catch (error) {
    console.log(error);
  }
};
