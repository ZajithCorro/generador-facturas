const productItem = ({ id, title, price, image }) => {
  return `<section class="product" data-id="${id}">
    <img class="product-image" src=${image} loading="lazy" alt="${title}"/>
    <div class="product-details">
      <div class="product-details-description">
        <h2 class="product-details-description-title">${title}</h2>
        <p class="product-details-description-price">$${price}</p>
      </div>

      <button class="btn-add">Add to cart</button>
    </div>
  </section>`;
};

export default productItem;
