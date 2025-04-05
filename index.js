function fetchBooks() {
  // Return the fetch promise chain so tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(json => renderBooks(json))
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById('books');

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});