const libraryContainer = document.querySelector(".libraryContainer");
const dialog = document.querySelector("dialog");
// const removeBtn = document.querySelector(".removeBtn")

const myLibrary = [];
let counter = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '287', true);
myLibrary.push(theHobbit)
const deathOnTheNile = new Book('Death on the Nile', 'Agatha Christie', '288', true);
myLibrary.push(deathOnTheNile)

addLibraryToPage()

function addBookToLibrary() {
    const newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("read").checked
    )
    dialog.close();
    myLibrary.push(newBook);
    addLibraryToPage();
}

function addLibraryToPage() {
    myLibrary.forEach(book => {
        if (myLibrary.indexOf(book) >= counter) {

        const bookCard = document.createElement('div');
              bookCard.classList.add('bookCard');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        const removeBtn = document.createElement('button');
              removeBtn.classList.add('removeBtn');
              removeBtn.addEventListener('click', remove)
        const readStatus = document.createElement('button');
              readStatus.classList.add('readStatus');
              readStatus.addEventListener('click', readUpdate);
        
        bookTitle.textContent = (`Title: ${book.title}`);
        bookAuthor.textContent = (`Author: ${book.author}`);
        bookPages.textContent = (`Number of Pages: ${book.pages}`);
        if (book.read == true) {
            bookRead.textContent = ('Read');
        } else {
            bookRead.textContent = ("Not Read");
        }
        removeBtn.textContent = ("X");
        readStatus.textContent = ("read it yet?");

        bookCard.append(bookTitle,bookAuthor,bookPages,bookRead,removeBtn,readStatus);
        libraryContainer.appendChild(bookCard);

        function remove() {
            const x = (myLibrary.indexOf(book));
            libraryContainer.removeChild(bookCard)
            myLibrary.splice(x, 1);
            counter--
        }

        function readUpdate() {
            if (book.read === true) {
                book.read = false;
                bookRead.textContent = "Not Read"
            } else {
                book.read = true;
                bookRead.textContent = "Read"
            }
        }

        counter++
}})}


