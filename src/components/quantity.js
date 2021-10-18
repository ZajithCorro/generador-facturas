export function addListenersQuantity() {
  document.querySelectorAll('.quantity-plus').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { target } = event;
      const quantityContainer = target.closest('div.quantity');
      const spanQuantity = quantityContainer.querySelector('span');
      const valueSpan = parseInt(spanQuantity.textContent);
      spanQuantity.textContent = valueSpan + 1;
    });
  });

  document.querySelectorAll('.quantity-minus').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { target } = event;
      const quantityContainer = target.closest('div.quantity');
      const spanQuantity = quantityContainer.querySelector('span');
      const valueSpan = parseInt(spanQuantity.textContent);

      if (valueSpan === 1) return;

      spanQuantity.textContent = valueSpan - 1;
    });
  });
}
