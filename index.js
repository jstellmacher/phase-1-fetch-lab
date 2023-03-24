//Jais code
//To pass the tests, don't forget to return your fetch!
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books").then((resp) => resp.json()).then((json) => renderBooks(json));
  //no need for return because no {}
  //resp = response
}
//return fetchBooks();

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
