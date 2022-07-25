import { URL } from '../controller/URL.js';

const getApiProducts = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('something wrong');
    }

    const productsData = await response.json();

    return productsData;
  } catch (error) {
    console.log(error);
  }
};

export default getApiProducts;
