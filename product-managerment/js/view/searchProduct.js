import { searchInput } from '../controller/elements.js';
import ProductItem from '../model/ProductItem.js';
import { searchApiProduct } from '../model/searchApiProduct.js';
import { showUpdateFunction } from '../services/showUpdateFunction.js';
import { delProduct } from './delProduct.js';
import { renderProductsList } from './initProductList.js';

const getSearchProductData = async (query) => {
  try {
    const searchedProductsData = await searchApiProduct(query);

    const products = searchedProductsData.map((product) => {
      const { id, name, price, image, desc } = product;
      return (product = new ProductItem(id, name, price, image, desc));
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

searchInput.addEventListener('keypress', function (event) {
  if (event.key !== 'Enter') return;
  const query = event.target.value;

  getSearchProductData(query);
});
