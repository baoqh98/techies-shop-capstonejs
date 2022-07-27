import { productListEl } from '../services/elements.js';

export const cart = JSON.parse(localStorage.getItem('cart')) || [];

export const increaseHandler = (cartItem) => {
  const itemQuantitySpan = document.getElementById(
    `itemQuantity-${cartItem.product.id}`
  );

  cartItem.quantity += 1;

  itemQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const decreaseHandler = (cartItem) => {
  const quantityActions = document.getElementById(
    `actions-${cartItem.product.id}`
  );
  const itemQuantitySpan = document.getElementById(
    `itemQuantity-${cartItem.product.id}`
  );
  const cartItemIndex = cart.findIndex(
    (item) => item.product.id === cartItem.product.id
  );

  cartItem.quantity -= 1;

  itemQuantitySpan.innerHTML = `x ${cartItem.quantity}`;

  if (cartItem.quantity === 0) {
    quantityActions.querySelector('.product-btn').style.display = 'block';
    quantityActions.querySelector('.quantity-actions').style.display = 'none';
    itemQuantitySpan.innerHTML = `x 1`;

    cart.splice(cartItemIndex, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addCart = (productList) => {
  const addCartBtns = productListEl.querySelectorAll('.product-btn');
  const increaseBtns = productListEl.querySelectorAll(
    '[data-type="increase-btn"]'
  );
  const decreaseBtns = productListEl.querySelectorAll(
    '[data-type="decrease-btn"]'
  );

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      // create product item
      const itemId = event.target.dataset.id;
      const product = productList.find((product) => product.id === itemId);
      const quantityActions = document.getElementById(`actions-${itemId}`);

      const isCartItemExist = cart.some((item) => item.product.id === itemId);

      const cartItem = {
        product: {
          id: product.id,
          price: product.price,
          name: product.name,
          image: product.image,
        },
        quantity: 1,
      };

      if (isCartItemExist) return;
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      quantityActions.querySelector('.product-btn').style.display = 'none';
      quantityActions.querySelector('.quantity-actions').style.display =
        'block';
    });
  });

  if (cart.length !== 0) {
    cart.forEach((cartItem) => {
      const itemQuantitySpan = document.getElementById(
        `itemQuantity-${cartItem.product.id}`
      );
      const quantityActions = document.getElementById(
        `actions-${cartItem.product.id}`
      );

      if (!quantityActions) return;

      quantityActions.querySelector('.product-btn').style.display = 'none';
      quantityActions.querySelector('.quantity-actions').style.display =
        'block';

      itemQuantitySpan.innerHTML = `x ${cartItem.quantity}`;
    });
  }

  increaseBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      if (!event.target) return;

      const cartItem = cart.find(
        (item) => item.product.id === event.target.dataset.id
      );

      increaseHandler(cartItem);
    });
  });

  decreaseBtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      if (!event.target) return;
      const cartItem = cart.find(
        (item) => item.product.id === event.target.dataset.id
      );

      decreaseHandler(cartItem);
    });
  });
};
