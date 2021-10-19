import { addListenersQuantityCart } from '@components/quantity';
export default class Cart {
  constructor() {
    this._products = [];
    this._updateCart();
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
    this._updateCart();
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
    this._updateCart();
  }

  _updateCart() {
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.querySelector('.cart-total');
    const btnPay = document.querySelector('.cart-btn');
    let totalCart = 0;

    if (!this._products.length) {
      cartList.innerHTML = `<div class="cart-list-empty">
        Your cart is empty. Add products from the list
      </div>
      `;
      cartTotal.classList.add('d-none');
      btnPay.classList.add('d-none');
      return;
    }

    const htmlProducts = this._products.map(
      ({ title, price, id, quantity }) => {
        const totalPrice = price * quantity;
        totalCart = totalCart + totalPrice;

        return `<div class="cart-list-item" data-id="${id}">
          <div class="cart-list-item-description">
            <p>${title}</p>
            <p>$${price}</p>
          </div>
          <div class="cart-list-item-actions">
            <div class="quantity">
              <button class="quantity-minus">-</button>
              <span>${quantity}</span>
              <button class="quantity-plus">+</button>
            </div>
            <p>$${totalPrice}</p>
          </div>
        </div>`;
      }
    );

    if (cartTotal.classList.contains('d-none'))
      cartTotal.classList.remove('d-none');

    if (btnPay.classList.contains('d-none')) btnPay.classList.remove('d-none');

    cartList.innerHTML = htmlProducts.join('');
    cartTotal.innerHTML = `
      <p>Total</p>
      <p>$${totalCart}</p>
    `;

    this._addListenersQuantityCart();
  }

  _increaseQuantityProductInCart(id) {
    const idFormat = parseInt(id);
    const product = this._products.find((product) => product.id === idFormat);
    const productIndex = this._products.findIndex(
      (product) => product.id === idFormat
    );
    const newProduct = { ...product, quantity: product.quantity + 1 };
    this._products[productIndex] = newProduct;
    this._updateCart();
  }

  _decreaseQuantityProductInCart(id) {
    const idFormat = parseInt(id);
    const product = this._products.find((product) => product.id === idFormat);
    const productIndex = this._products.findIndex(
      (product) => product.id === idFormat
    );

    if (product.quantity === 1) {
      this._products.splice(productIndex, 1);
    } else {
      const newProduct = { ...product, quantity: product.quantity - 1 };
      this._products[productIndex] = newProduct;
    }

    this._updateCart();
  }

  _addListenersQuantityCart() {
    document
      .querySelectorAll('.cart-list-item-actions .quantity-plus')
      .forEach((btn) => {
        btn.addEventListener('click', (event) => {
          const { target } = event;
          const quantityContainer = target.closest('div.quantity');
          const idProduct = target.closest('.cart-list-item').dataset.id;
          const spanQuantity = quantityContainer.querySelector('span');
          const valueSpan = parseInt(spanQuantity.textContent);
          spanQuantity.textContent = valueSpan + 1;

          this._increaseQuantityProductInCart(idProduct);
        });
      });

    document
      .querySelectorAll('.cart-list-item-actions .quantity-minus')
      .forEach((btn) => {
        btn.addEventListener('click', (event) => {
          const { target } = event;
          const quantityContainer = target.closest('div.quantity');
          const idProduct = target.closest('.cart-list-item').dataset.id;
          const spanQuantity = quantityContainer.querySelector('span');
          const valueSpan = parseInt(spanQuantity.textContent);

          spanQuantity.textContent = valueSpan - 1;
          this._decreaseQuantityProductInCart(idProduct);
        });
      });
  }
}
