export const markupProductList = (name, img, type, desc, price) => {
  return `
  <div class="col-3">
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-img">
        <img
          src="${img}"
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
      <div class="product-actions">
        <span class="product-price">$${price}</span>
        <button
          class="increase product-btn"
          id="addCartBtn"
        >
          + Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
  `;
};
