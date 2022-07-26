export const markupProductList = (product) => {
  return `
  <div class="col-3" data-id="${product.id}">
    <div class="product-card">
      <div class="product-card__wrapper">
        <div class="product-img">
          <img
            src="${product.img}"
            alt="${product.name}"
          />
        </div>
        <div class="product-info">
          <div class="product-heading">
            <p>${product.name}</p>
          </div>
          <div class="product-body">
            <span class="product-type">${product.type}</span>
            <span class="product-desc"
              >${product.desc}</span
            >
          </div>
        </div>
        <div class="product-actions" id="actions-${product.id}">
          <span class="product-price">$${product.price}</span>
          <button
            class="product-btn"
            data-id="${product.id}"
          >
            + Add to Cart
          </button>
          <div class="quantity-actions">
            <button class="quantity-btn" data-type="decrease-btn" data-id="${product.id}">-</button>
            <span class="product-quantity" id="itemQuantity-${product.id}">x 1</span>
          <button class="quantity-btn" data-type="increase-btn" data-id="${product.id}">+</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
