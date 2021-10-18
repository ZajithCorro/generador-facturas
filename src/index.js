import { getAllProducts } from '@services/getAllProducts';
import renderProducts from './templates/renderProducts';
import '@styles/main.scss';

async function init() {
  const products = await getAllProducts();
  renderProducts(products);

  console.log(products);
}

window.addEventListener('load', init);
