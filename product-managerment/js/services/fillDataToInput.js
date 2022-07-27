import {
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
} from '../controller/elements.js';

export const fillDataToInput = (product) => {
  const { name, price, image, desc } = product;
  productNameInp.value = name;
  productPriceInp.value = price;
  productImageInp.value = image;
  productDescInp.value = desc;
};
