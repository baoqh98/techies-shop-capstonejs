import { URL } from '../controller/store/URL.js';

const postApiProduct = async (product) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
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

export default postApiProduct;
