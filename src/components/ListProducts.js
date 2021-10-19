import productItem from '@components/productItem';
import { addListenersQuantity } from '@components/quantity';
import { addListenersBtnProduct } from '@utils/addListenersBtnProduct';

export default class ListProducts {
  constructor(products, callback) {
    this._products = products;
    this._callback = callback;
    this._init();
  }

  _init() {
    const productsContainer = document.querySelector('.products');
    const productsHTML = this._products.map((el) => productItem(el));

    productsContainer.innerHTML = productsHTML.join('');
    addListenersQuantity();
    addListenersBtnProduct(this._products, this._callback);
  }
}
