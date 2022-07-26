import { markupCartItem } from '../controllers/markupCartItem.js';
import { getDataFromApi } from '../models/modelApi.js';
import {
  cartCheckoutBtn,
  cartEl,
  cartListEl,
  cartTotalAmount,
  elementForCloseModal,
  overlayModal,
  productListEl,
} from '../services/elements.js';
import { cart, decreaseHandler, increaseHandler } from './addCart.js';
import { renderProductList } from './renderProductList.js';

const productData = await getDataFromApi();

const quantityHandler = () => {
  const increaseBtns = cartListEl.querySelectorAll('.increase');
  const decreaseBtns = cartListEl.querySelectorAll('.decrease');

  increaseBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      const itemCartQuantitySpan = document.getElementById(
        `itemCartQuantity-${event.target.dataset.id}`
      );
      const cartItem = cart.find(
        (item) => item.product.id === event.target.dataset.id
      );
      const cartItemIndex = cart.findIndex(
        (item) => item.product.id === event.target.dataset.id
      );

      // quantity handler
      increaseHandler(cartItem);

      // render
      itemCartQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

      // updated cart
      cart[cartItemIndex] = cartItem;
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  });

  decreaseBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      if (!event.target) return;
      // DOM
      const itemCartQuantitySpan = document.getElementById(
        `itemCartQuantity-${event.target.dataset.id}`
      );
      if (!itemCartQuantitySpan) return;

      const cartItemEl = document.getElementById(
        `cartItem-${event.target.dataset.id}`
      );
      const cartItem = cart.find(
        (item) => item.product.id === event.target.dataset.id
      );
      const cartItemIndex = cart.findIndex(
        (item) => item.product.id === event.target.dataset.id
      );

      // quantity handler
      decreaseHandler(cartItem);

      // render
      itemCartQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

      if (cartItem.quantity === 0) {
        cartListEl.removeChild(cartItemEl);
        return;
      }

      // updated cart
      cart[cartItemIndex] = cartItem;
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  });
};

const removeCartListHandler = (event) => {
  if (!event.target) return;
  cartListEl
    .querySelectorAll('.cart-item')
    .forEach((item) => item.parentNode.removeChild(item));
};

const showCartListHandler = (event) => {
  if (!event.target) return;

  // show cart list and amount
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const totalAmount = cartStorage
    .map((item) => {
      return item.product.price * item.quantity;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  cartStorage.forEach((cartItem) => {
    const markup = markupCartItem(cartItem);
    cartListEl.insertAdjacentHTML('afterbegin', markup);
  });
  quantityHandler();

  cartTotalAmount.querySelector(
    'span'
  ).innerHTML = `Total Amount: $${totalAmount}`;
};

const checkoutHandler = (event) => {
  if (!event.target) return;
  localStorage.removeItem('cart');
  productListEl.querySelector('.row').innerHTML = null;
  cartTotalAmount.querySelector('span').innerHTML = `Total Amount: $0`;
  cart.length = 0;
  // renderProductList(productData);
};

// close modal and remove list item in cart
overlayModal.addEventListener('click', function (event) {
  if (event.target !== overlayModal) return;
  cartListEl
    .querySelectorAll('.cart-item')
    .forEach((item) => item.parentNode.removeChild(item));
});
elementForCloseModal.forEach((el) => {
  el.addEventListener('click', removeCartListHandler);
});

// open modal and import list item in cart
cartEl.addEventListener('click', showCartListHandler);

// checkout: send order request to backend and remove cart
cartCheckoutBtn.addEventListener('click', checkoutHandler);
