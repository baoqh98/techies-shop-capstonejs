import {
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
} from '../controller/elements.js';

export const getDataFromInput = () => {
  const name = productNameInp.value;
  const price = +productPriceInp.value;
  const image = productImageInp.value;
  const desc = productDescInp.value;

  return {
    name,
    price,
    image,
    desc,
  };
};
