const innerContainer = document.querySelector('.inner-ctn');
const form = document.querySelector('.form');

let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

let addBook = (book) => {
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const button = document.createElement('button');
  const hr = document.createElement('hr');

  bookContainer.classList.add('book-ctn');
  bookTitle.classList.add('book-title');
  bookAuthor.classList.add('book-author');
  button.classList.add('remove-btn');

  bookTitle.innerHTML = `${book.title}`;
  bookAuthor.innerHTML = `${book.author}`;
  button.innerHTML = 'Remove';

  innerContainer.appendChild(bookContainer);
  innerContainer.appendChild(bookTitle);
  innerContainer.appendChild(bookAuthor);
  innerContainer.appendChild(button);
  innerContainer.appendChild(hr);
};

const removeBook = (title) => {
  books = books.filter((book) => book.title === title);
  return books;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputTitle = document.querySelector('.title').value;
  const inputAuthor = document.querySelector('.author').value;
  const book = new Book(inputTitle, inputAuthor);
  books.push(book);
  addBook(book);
});

document.addEventListener('HTMLContentLoaded', () => {
  books.forEach((book) => {
    addBook(book);
  });
});
