const libraryContainer = document.querySelector(".libraryContainer");
const dialog = document.querySelector("dialog");

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(isRead);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '287', true);
myLibrary.push(theHobbit)
const deathOnTheNile = new Book('Death on the Nile', 'Agatha Christie', '288', true);
myLibrary.push(deathOnTheNile)

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function addLibraryToPage() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        
        bookTitle.textContent = (`Title: ${book.title}`);
        bookAuthor.textContent = (`Author: ${book.author}`);
        bookPages.textContent = (`Number of Pages: ${book.pages}`);
        bookRead.textContent = (`Been Read? ${book.read}`);

        bookCard.append(bookTitle,bookAuthor,bookPages,bookRead);
        libraryContainer.appendChild(bookCard);
})}

addLibraryToPage()