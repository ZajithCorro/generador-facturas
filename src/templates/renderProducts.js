import productItem from '@components/productItem';
import { addListenersQuantity } from '@components/quantity';

export function renderProducts(productList) {
  const productsContainer = document.querySelector('.products');
  const productsHTML = productList.map((el) => productItem(el));

  productsContainer.innerHTML = productsHTML.join('');
  addListenersQuantity();
}
