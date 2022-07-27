import delApiProduct from '../model/delApiProduct.js';
import { initProductsList } from './initProductList.js';

export const delProduct = async (event) => {
  try {
    if (!event.target) return;

    const id = event.target.dataset.id;

    await delApiProduct(id).then(() => {
      initProductsList();
    });
  } catch (error) {
    console.log(error);
  }
};
