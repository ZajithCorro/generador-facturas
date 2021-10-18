const cartState = [];

export function addToCart(id, productsList, quantity) {
  const productIndexInCart = cartState.findIndex((product) => product.id == id);

  if (productIndexInCart === -1) {
    addNewProduct(id, productsList, quantity);
  } else {
    addOneToProduct(productIndexInCart, quantity);
  }

  console.log(cartState);
}

function addNewProduct(id, productsList, quantity) {
  const product = productsList.filter((product) => product.id == id)[0];

  const newProduct = { ...product, quantity };
  cartState.push(newProduct);
}

function addOneToProduct(productIndexInCart, quantity) {
  const product = cartState[productIndexInCart];
  const newProduct = { ...product, quantity: product.quantity + quantity };

  cartState[productIndexInCart] = newProduct;
}
