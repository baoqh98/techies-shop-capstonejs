import postApiProducts from '../model/postApiProduct.js';
import ProductItem from '../model/ProductItem.js';
import { closeModal } from '../services/closeModal.js';
import { getDataFromInput } from '../services/getDataFromInput.js';
import { resetForm } from '../services/resetForm.js';
import { initProductsList } from './initProductList.js';

export const addProduct = async () => {
  try {
    const { name, price, image, desc } = getDataFromInput();
    const newProduct = new ProductItem(null, name, price, image, desc);

    await postApiProducts(newProduct).then(() => {
      initProductsList()
        .then(() => resetForm())
        .then(() => closeModal());
    });
  } catch (error) {
    console.log(error);
  }
};
