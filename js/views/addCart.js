import { productListEl } from '../services/elements.js';

let cart = [];

const increaseHandler = (cartItem) => {
  const itemQuantitySpan = document.getElementById(
    `itemQuantity-${cartItem.product.id}`
  );

  cartItem.quantity += 1;

  itemQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

  localStorage.setItem('cart', JSON.stringify(cart));
};

const decreaseHandler = (cartItem) => {
  const quantityActions = document.getElementById(
    `actions-${cartItem.product.id}`
  );
  const itemQuantitySpan = document.getElementById(
    `itemQuantity-${cartItem.product.id}`
  );

  cartItem.quantity -= 1;

  itemQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

  if (cartItem.quantity === 0) {
    itemQuantitySpan.innerHTML = `x 1`;
    quantityActions.querySelector('.product-btn').style.display = 'block';
    quantityActions.querySelector('.quantity-actions').style.display = 'none';
    const cartItemIndex = cart.findIndex(
      (item) => item.product.id === cartItem.product.id
    );
    cart.splice(cartItemIndex, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

const createQuantityButtonsEl = (actionsEl) => {
  const quantityButtonsArr = Array.from(
    actionsEl
      .querySelector('.quantity-actions')
      .querySelectorAll('.quantity-btn')
  );

  const increaseButton = quantityButtonsArr.find(
    (item) => item.dataset.type === 'increase-btn'
  );

  const decreaseButton = quantityButtonsArr.find(
    (item) => item.dataset.type === 'decrease-btn'
  );

  return {
    increaseButton,
    decreaseButton,
  };
};

const addToCartHandler = (cartItem) => {
  const cartItemIndex = cart.findIndex(
    (item) => item.product.id === cartItem.product.id
  );
  if (cartItemIndex !== -1) {
    cart[cartItemIndex] = cartItem;
  } else {
    cart.push(cartItem);
  }

  // DOM
  const quantityActions = document.getElementById(
    `actions-${cartItem.product.id}`
  );

  const { increaseButton, decreaseButton } =
    createQuantityButtonsEl(quantityActions);

  // update item in Cart
  increaseButton.addEventListener('click', function () {
    if (cartItem.quantity === 0) return;
    increaseHandler(cartItem);
  });

  decreaseButton.addEventListener('click', function () {
    decreaseHandler(cartItem);
  });

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addCart = (productList) => {
  const addCartBtns = productListEl.querySelectorAll('.product-btn');

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      // create product item
      const itemId = event.target.dataset.id;
      const product = productList.find((product) => product.id === itemId);

      const cartItem = {
        product: {
          id: product.id,
          price: product.price,
          name: product.name,
          image: product.img,
        },
        quantity: 1,
      };

      const quantityActions = document.getElementById(`actions-${itemId}`);
      quantityActions.querySelector('.product-btn').style.display = 'none';
      quantityActions.querySelector('.quantity-actions').style.display =
        'block';

      addToCartHandler(cartItem);
    });
  });
};
