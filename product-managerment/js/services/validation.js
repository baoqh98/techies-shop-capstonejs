import {
  nameAlertSpan,
  typeAlertSpan,
  priceAlertSpan,
  imageAlertSpan,
  descAlertSpan,
} from '../controller/elements.js';

const isRequired = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

const nameCheck = (name) => {
  if (!isRequired(name)) {
    nameAlertSpan.innerHTML = 'Bạn không được để trống';
    return false;
  } else {
    nameAlertSpan.innerHTML = '';
    return true;
  }
};

const typeCheck = (type) => {
  if (!isRequired(type)) {
    typeAlertSpan.innerHTML = 'Chưa chọn loại sản phẩm';
    return false;
  } else {
    typeAlertSpan.innerHTML = '';
    return true;
  }
};

const priceCheck = (price) => {
  const pricePattern = new RegExp('^[0-9]+$');

  if (!isRequired(price)) {
    priceAlertSpan.innerHTML = 'Bạn không được để trống';
    console.log('things');
    return false;
  } else if (!pricePattern.test(price)) {
    priceAlertSpan.innerHTML = 'Chỉ nhập số cho giá tiền sản phẩm';
    return false;
  } else {
    priceAlertSpan.innerHTML = '';
    return true;
  }
};

const imageCheck = (image) => {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const imagePattern = new RegExp(expression);
  if (!isRequired(image)) {
    imageAlertSpan.innerHTML = 'Bạn không được để trống';
    return false;
  } else if (!image.match(imagePattern)) {
    imageAlertSpan.innerHTML = 'Cần nhập url hợp lệ';
    return false;
  } else {
    imageAlertSpan.innerHTML = '';
    return true;
  }
};

const descCheck = (desc) => {
  if (!isRequired(desc)) {
    descAlertSpan.innerHTML = 'Bạn không được để trống';
    return false;
  } else {
    descAlertSpan.innerHTML = '';
    return true;
  }
};

export const checkValidation = (name, type, price, image, desc) => {
  let isValid;

  const nameIsValid = nameCheck(name);
  const priceIsValid = priceCheck(price);
  const imageIsValid = imageCheck(image);
  const descIsValid = descCheck(desc);
  const typeIsValid = typeCheck(type);

  if (
    nameIsValid &&
    typeIsValid &&
    priceIsValid &&
    imageIsValid &&
    descIsValid
  ) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};
