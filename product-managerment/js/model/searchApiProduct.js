import { URL } from '../controller/store/URL.js';

export const searchApiProduct = async (query) => {
  try {
    const searchedData = await fetch(`${URL}?name=${query}`)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err.message);
      });

    return searchedData;
  } catch (error) {
    console.log(error);
  }
};
