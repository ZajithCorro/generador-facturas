import { addToCart } from '@utils/addToCart';

export function addListenersBtnProduct(products) {
  document.querySelectorAll('.btn-add').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { target } = event;

      const id = target.closest('section').dataset.id;
      const quantity = parseInt(
        target.closest('div').querySelector('div.quantity span').textContent
      );

      addToCart(id, products, quantity);
    });
  });
}
