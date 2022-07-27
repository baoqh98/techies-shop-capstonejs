export const markupCartItem = (item) => {
  const { id, name, price, image } = item.product;
  const { quantity } = item;

  return `
  <li id='cartItem-${id}' class="cart-item">
    <div class="item-img">
      <img src="${image}" alt="">
    </div>
    <div class="item-detail">
      <p class="item-name">${name}</p>
      <p class="item-price">${+price * +quantity}$</p>
    </div>
    <div class="item-action">
    <button class="decrease" id="decreaseBtn-${id}" data-id="${id}" data-type="decrease">-</button>
    <span class="item-quantity" id="itemCartQuantity-${id}">x ${quantity}</span>
    <button class="increase" id="increaseBtn-${id}" data-id="${id}" data-type="increase">+</button>
    </div>
  </li>
`;
};
