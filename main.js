// const table = document.getElementById("book-table");
// const tableBody = document.getElementById("book-list");
// let newRow = tableBody.insertRow();
// let titleCell = newRow.insertCell();
// let authorCell = newRow.insertCell();
// titleCell.innerHTML = "EXAMPLE TITLE";
// authorCell.innerHTML = "EXAMPLE Author";

let myLibrary = [];

function Book(title, author, pageCount, completeness){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.completeness = completeness;
}

function addBookToLibrary(title, author, pageCount, completeness){
    let nextBook = new Book(title, author, pageCount, completeness);
    myLibrary.push(nextBook);

    const list = document.getElementById("book-list");
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${nextBook.title}</td>
    <td>${nextBook.author}</td>
    <td>${nextBook.pageCount}</td>
    <td>${nextBook.completeness}</td>
    `;
    list.appendChild(row);
}

addBookToLibrary("The Final Empire", "Brando Sando", "600", "yes");
addBookToLibrary("The Well of Ascension", "Brandy Sandy", "600", "yes");
addBookToLibrary("The Hero of Ages", "Brand Sand", "600", "no");



myLibrary.forEach(book => {
    console.log(book);
})

// loops through the books in the array run display book