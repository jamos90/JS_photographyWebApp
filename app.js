document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  const shoppingCart = document.createElement('ul');

  const newItem = document.createElement('li');

  const shoppingCartDiv = document.querySelector('#shopping-cart');

  shoppingCartDiv.appendChild(shoppingCart);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pictureTitle = event.target.title.value;

    const ammount = event.target.amount.value;

    const size = event.target.size.value;

    newItem.textContent = `${pictureTitle}, ${ammount}, ${size}`;

    shoppingCart.appendChild(newItem);

    form.reset();
  })
  });
