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
  }
}
