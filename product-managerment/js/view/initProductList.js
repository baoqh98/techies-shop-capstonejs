import { productListTable } from '../controller/elements.js';
import { markupProduct } from '../controller/markupProduct.js';
import getApiProducts from '../model/getApiProducts.js';
import ProductItem from '../model/ProductItem.js';
import { showUpdateFunction } from '../services/showUpdateFunction.js';
import { delProduct } from './delProduct.js';

export const renderProductsList = (products) => {
  let html = '';
  products.forEach((product) => {
    const markup = markupProduct(product);
    html += markup;
  });
  productListTable.innerHTML = html;
};

export const initProductsList = async () => {
  try {
    const productsData = await getApiProducts();

    const products = productsData.map((product) => {
      const { id, name, type, price, image, desc } = product;
      return (product = new ProductItem(id, name, type, price, image, desc));
    });

    renderProductsList(products);

    // control action
    const updateBtnEls = document.querySelectorAll('[data-action="update"]');
    const deleteBtnEls = document.querySelectorAll('[data-action="delete"]');

    updateBtnEls.forEach((btn) =>
      btn.addEventListener('click', showUpdateFunction)
    );
    deleteBtnEls.forEach((btn) => {
      btn.addEventListener('click', delProduct);
    });
  } catch (error) {
    console.log(error);
  }
};

initProductsList();
