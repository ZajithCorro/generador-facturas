import Cart from '@components/Cart';
import ListProducts from '@components/ListProducts';
import { getAllProducts } from '@services/getAllProducts';
import '@styles/main.scss';

async function init() {
  const products = await getAllProducts();
  const myCart = new Cart();
  const listProducts = new ListProducts(products, myCart);
}

window.addEventListener('load', init);
