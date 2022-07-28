import {
  descAlertSpan,
  imageAlertSpan,
  myModal,
  nameAlertSpan,
  priceAlertSpan,
  productDescInp,
  productImageInp,
  productNameInp,
  productPriceInp,
  productTypeInp,
  typeAlertSpan,
} from '../controller/elements.js';

export const resetForm = () => {
  productNameInp.value = '';
  productTypeInp.value = '';
  productPriceInp.value = '';
  productImageInp.value = '';
  productDescInp.value = '';

  nameAlertSpan.innerHTML = '';
  typeAlertSpan.innerHTML = '';
  priceAlertSpan.innerHTML = '';
  imageAlertSpan.innerHTML = '';
  descAlertSpan.innerHTML = '';
};

document.querySelectorAll('[data-dismiss="modal"]').forEach((el) => {
  el.addEventListener('click', resetForm);
});
