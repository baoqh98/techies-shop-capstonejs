import { productFilterSelector, productListEl } from '../services/elements.js';
import { markupProductList } from '../controllers/markupProductList.js';
import { getDataFromApi } from '../models/modelApi.js';
import { addCart } from './addCart.js';

const productListData = await getDataFromApi();

const filterProduct = (event) => {
  const selectedFilterValue = event.target.value;
  if (selectedFilterValue === 'all') {
    return productListData;
  }
  const filteredProduct = productListData.filter((item) => {
    return item.type === selectedFilterValue;
  });

  return filteredProduct;
};

const renderProductList = (productList) => {
  let html = '';

  productList.forEach((product) => {
    html += markupProductList(product);
  });

  productListEl.querySelector('.row').innerHTML = html;
};

productFilterSelector.addEventListener('change', function (event) {
  const filteredProduct = filterProduct(event);
  renderProductList(filteredProduct);
  addCart(filteredProduct);
});

renderProductList(productListData);
addCart(productListData);
