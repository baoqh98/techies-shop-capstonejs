import { URL } from '../controller/store/URL.js';

const delApiProduct = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('something wrong');
    }

    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.log(error);
  }
};

export default delApiProduct;
