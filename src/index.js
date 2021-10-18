import { getAllProducts } from '@services/getAllProducts';
import { renderProducts } from '@templates/renderProducts';
import { addListenersBtnProduct } from '@utils/addListenersBtnProduct';
import '@styles/main.scss';

async function init() {
  const products = await getAllProducts();

  renderProducts(products);
  addListenersBtnProduct(products);
}

window.addEventListener('load', init);
