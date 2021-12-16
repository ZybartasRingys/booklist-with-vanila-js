// Book class :

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ui class: user interface tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "book two",
        author: "Jane Doe",
        isbn: "45545",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.clasName = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Show books when domcontent loaded
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//add book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //validate

  if (title === " " || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    // instantiate book
    const book = new Book(title, author, isbn);

    // add book to ui

    UI.addBookToList(book);

    //clear fields

    UI.clearFields();
  }
});

// remove book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
