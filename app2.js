document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  // creating a variable for each new list item.
  const readingList = document.createElement('ul');

  const newBook = document.createElement("li")

  //select the reading list div
  const readingListDiv =
  document.querySelector('#reading-list');

  // appending the new books to the ul list created abouve.
  readingListDiv.appendChild(readingList);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputTitle = event.target.title.value;
    const intputAuthoer = event.target.author.value;
    const inputCategory = event.target.category.value;


    newBook.textContent = `${inputTitle}, by ${intputAuthoer}. ${inputCategory}`;

    readingList.appendChild(newBook);

    form.reset();

  });


})
