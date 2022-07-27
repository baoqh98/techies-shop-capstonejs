export const markupProduct = (product) => {
  const { id, name, price, image, desc } = product;

  return `
  <tr data-id="${id}" id="${id}">
    <td>${id}</td>
    <td>${name}</td>
    <td>$${price}</td>
    <td>
      <img style="
      width: 70px; height: 70px;" src="${image}" alt="${name}">
    </td>
    <td>${desc}</td>
    <td style="
    width: 220px;
    text-align: center;
">
      <button class="btn btn-info" data-id="${id}" data-toggle="modal" data-target="#myModal" data-action="update">Update</button>
      <button class="btn btn-danger" data-id="${id}" data-action="delete">Delete</button>
    </td>
  </tr>
  `;
};
