import {
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
  productTypeInp,
} from '../controller/elements.js';

export const fillDataToInput = (product) => {
  const { name, type, price, image, desc } = product;
  productNameInp.value = name;
  productTypeInp.value = type;
  productPriceInp.value = price;
  productImageInp.value = image;
  productDescInp.value = desc;
};
