import {
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
} from '../controller/elements.js';

export const resetForm = () => {
  productNameInp.value = '';
  productPriceInp.value = '';
  productImageInp.value = '';
  productDescInp.value = '';
};
