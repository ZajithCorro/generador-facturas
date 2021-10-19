export function addListenersBtnProduct(products, myCart) {
  document.querySelectorAll('.btn-add').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { target } = event;

      const id = parseInt(target.closest('section').dataset.id);
      const quantity = parseInt(
        target.closest('div').querySelector('div.quantity span').textContent
      );
      target.closest('div').querySelector('div.quantity span').textContent = 1;
      const product = products.filter((product) => product.id === id)[0];

      myCart.addToCart(product, quantity);
    });
  });
}
