const productItem = ({ id, title, price, image }) => {
  return `<section class="product" data-id="${id}">
    <img class="product-image" src=${image} loading="lazy" alt="${title}"/>
    <div class="product-details">
      <h2 class="product-details-title">${title}</h2>

      <div class="product-details-description">
        <p class="product-details-description-price">$${price}</p>

        <div class="quantity">
          <button class="quantity-minus">-</button>
          <span>1</span>
          <button class="quantity-plus">+</button>
        </div>

      </div>

      <button class="btn-add">Add to cart</button>
    </div>
  </section>`;
};

export default productItem;
