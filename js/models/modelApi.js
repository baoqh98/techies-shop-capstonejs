import { URL } from './store.js';

export const getDataFromApi = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Some thing wrong. Could not get product data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
