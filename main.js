// const table = document.getElementById("book-table");
// const tableBody = document.getElementById("book-list");
// let newRow = tableBody.insertRow();
// let titleCell = newRow.insertCell();
// let authorCell = newRow.insertCell();
// titleCell.innerHTML = "EXAMPLE TITLE";
// authorCell.innerHTML = "EXAMPLE Author";

// TODO: Add delete option

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pageInput = document.getElementById("pageInput");
const completedBox = document.getElementById("completedBox");

// function to verify input (all forms + page is number)
// check that book isn't already on the list

function submit(){
    if(verifyInput()){
        let completion = completedBox.checked ? "✓" : "X";
        addBookToLibrary(titleInput.value,authorInput.value,pageInput.value,completion);
    }
}

// REFACTOR: Make this a ternary
function verifyInput(){
    // verify thar pageInput is a number
    if(isNaN(pageInput.value)){
        alert("Please enter a valid number.")
        return false;
    }

    // check that fields aren't empty
    if((titleInput.value != '') && (authorInput.value != '') && (pageInput.value != '')){
        return true;
    } else{
        alert("Please Complete All Fields.")
        return false;
    }
}

let myLibrary = [];

function Book(title, author, pageCount, completeness){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.completeness = completeness;
}
// swaps completion status
Book.prototype.read = function(){
    if(this.completeness == "✓"){
        this.completeness = "X";
    } else if(this.completeness == "X"){
        this.completeness = "✓";
    }
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
    <td><button class="read"></td>
    <td><button class="remove">X</button></td>
    `;
    list.appendChild(row);
}

// hard coded book examples
addBookToLibrary("The Final Empire", "Brando Sando", "600", "✓");
addBookToLibrary("The Well of Ascension", "Brandy Sandy", "600", "✓");
addBookToLibrary("The Hero of Ages", "Brand Sand", "600", "X");



myLibrary.forEach(book => {
    console.log(book,book.read());
})

// loops through the books in the array run display book