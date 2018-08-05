document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  const shoppingCart = document.createElement('ul');

  const shoppingCartDiv = document.querySelector('#shopping-cart');


  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pictureTitle = event.target.title.value;

    const ammount = event.target.amount.value;

    const size = event.target.size.value;

    const newItem = document.createElement('li');

    newItem.textContent = `${pictureTitle}, ${ammount}, ${size}`;

    const list = document.querySelector('#shopping-cart');
    list.appendChild(shoppingCart);
    shoppingCart.appendChild(newItem);

    form.reset();
  });

   const deleteAll = document.querySelector('#delete-button');
     deleteAll.addEventListener("click", () => {
     const list = document.querySelector('#shopping-cart');
     list.textContent = " ";
     form.reset();

    });
  });
