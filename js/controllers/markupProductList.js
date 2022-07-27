export const markupProductList = (product) => {
  const { id, name, price, image, desc, type } = product;
  return `
  <div class="col-3" data-id="${id}">
    <div class="product-card">
      <div class="product-card__wrapper">
        <div class="product-img">
          <img
            src="${image}"
            alt="${name}"
          />
        </div>
        <div class="product-info">
          <div class="product-heading">
            <p>${name}</p>
          </div>
          <div class="product-body">
            <span class="product-type">${type}</span>
            <span class="product-desc"
              >${desc}</span
            >
          </div>
        </div>
        <div class="product-actions" id="actions-${id}">
          <span class="product-price">$${price}</span>
          <button
            class="product-btn"
            data-id="${id}"
          >
            + Add to Cart
          </button>
          <div class="quantity-actions">
            <button class="quantity-btn" data-type="decrease-btn" data-id="${id}">-</button>
            <span class="product-quantity" id="itemQuantity-${id}">x 1</span>
          <button class="quantity-btn" data-type="increase-btn" data-id="${id}">+</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
