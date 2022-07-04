import { productListEl } from '../services/elements.js';

import { markupProductList } from '../controllers/markupProductList.js';

import { getDataFromApi } from '../models/modelApi.js';

const productList = await getDataFromApi();

const renderProductList = () => {
  let html = '';

  productList.forEach((product) => {
    html += markupProductList(
      product.name,
      product.img,
      product.type,
      product.desc,
      product.price
    );
  });

  productListEl.querySelector('.row').innerHTML = html;
};

renderProductList();
