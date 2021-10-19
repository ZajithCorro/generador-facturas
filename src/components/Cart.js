export default class Cart {
  constructor() {
    this._products = [];
  }

  addToCart(product, quantity) {
    const { id } = product;
    const productInCart = this._products.find((product) => product.id == id);

    if (!productInCart) {
      this._addNewProductToCart(product, quantity);
    } else {
      this._increaseQuantityProduct(product, quantity);
    }
  }

  _addNewProductToCart(product, quantity) {
    this._products.push({ ...product, quantity });
    console.log(this._products);
  }

  _increaseQuantityProduct(product, quantity) {
    const { id } = product;
    const productIndex = this._products.findIndex(
      (product) => product.id == id
    );
    const oldProduct = this._products[productIndex];
    const newProduct = {
      ...oldProduct,
      quantity: oldProduct.quantity + quantity,
    };
    this._products[productIndex] = newProduct;
  }
}
