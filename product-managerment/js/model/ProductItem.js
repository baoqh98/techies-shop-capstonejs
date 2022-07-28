class ProductItem {
  constructor(id, name, type, price, image, desc) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.price = +price;
    this.image = image;
    this.desc = desc;
  }
}

export default ProductItem;
