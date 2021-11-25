class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}  

class UI{
  static displayBooks() {
    myBooks = getFromLocalStorage();
    myBooks.forEach((book) => {
      render(book);
    });
  }

  static render(book){
    const bookList = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td> <a href="" class="delete"> Remove </a> </td>
        `;
    bookList.appendChild(row)   
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  static clearInput (){
    document.querySelector('.title').value = '';;
    document.querySelector('.author').value = '';
  }
}

class Storage{
  static getFromLocalStorage (){
    const books = JSON.parse(localStorage.getItem('myBooks')) || [];
    return books;
  }

  static saveToLocalStorage(book){
    const books = Storage.getFromLocalStorage();
    books.push(book);
    myBooks = books;
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
  }

  static removeBook(title){
    const store = Storage.getFromLocalStorage();
    for (let i = 0; i < store.length; i += 1) {
      if (store[i].title === title) {
        store.splice(i, 1);
      }
    }
    myBooks = store;
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
  }
}

//Display Books list
document.addEventListener('HTMLContentLoaded', displayBooks);

//Add Book to the form after user enters data
form.addEventListener('submit', (e) => {

//Prevent actual submit
  e.preventDefault();

//Get form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;

//Instantiate book  
  const book = new Book(title, author);

//Add book to UI  
  UI.render(book);

//Add book to Store  
  Storage.saveToLocalStorage(book);

//Clear Fields  
  UI.clearInput();
});

//Remove Book
document.querySelector('#book-list').addEventListener(
  'click',(e) => {

//Remove book from UI
  UI.deleteBook(e.target);

//Remove book from storage
  Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }
);  
