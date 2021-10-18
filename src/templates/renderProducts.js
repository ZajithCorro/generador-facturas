import productItem from '@components/productItem';

const renderProducts = (productList) => {
  const productsContainer = document.querySelector('.products');

  const productsHTML = productList.map((el) => productItem(el));

  productsContainer.innerHTML = productsHTML.join('');
};

export default renderProducts;
