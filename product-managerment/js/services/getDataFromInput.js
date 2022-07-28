import {
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
  productTypeInp,
} from '../controller/elements.js';

export const getDataFromInput = () => {
  const name = productNameInp.value;
  const type = productTypeInp.value;
  const price = productPriceInp.value;
  const image = productImageInp.value;
  const desc = productDescInp.value;

  return {
    name,
    type,
    price,
    image,
    desc,
  };
};
