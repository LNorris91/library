const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(isRead);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '287', true);

addBookToLibrary(theHobbit)
