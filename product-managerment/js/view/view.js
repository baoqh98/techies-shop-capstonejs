import { tblProductList } from '../controller/elements.js';
import getApiProducts from '../model/getApiProduct.js';

const productsData = await getApiProducts();

console.log(productsData);

let html = '';

productsData.forEach((element) => {
  html += `
    <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `;
});

tblProductList.innerHTML = html;
