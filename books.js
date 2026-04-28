const booksWrapper = document.querySelector(".books");

function renderBooks(books) {
  let booksHTML = "";
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    booksHTML += `
      <div class="book">
        <figure class="book__img--wrapper">
          <img class="book__img" src="${book.url}" alt="">
        </figure>
        <div class="book__title">
          ${book.title}
        </div>
        <div class="book__ratings">
          ${getRatingHTML(book.rating)}
        </div>
        <div class="book__price">
          ${getPriceHTML(book.originalPrice, book.salePrice)}
        </div>
      </div>
    `;
  }
  booksWrapper.innerHTML = booksHTML;
}

function getRatingHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += '<i class="fas fa-star"></i>';
  }
  if (rating % 1 !== 0) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  return ratingHTML;
}

function getPriceHTML(originalPrice, salePrice) {
  if (salePrice) {
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`;
  }
  return `$${originalPrice.toFixed(2)}`;
}

function filterBooks(event) {
  const filter = event.target.value;
  if (filter === "LOW_TO_HIGH") {
    renderBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
  }
  else if (filter === "HIGH_TO_LOW") {
    renderBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
  }
  else if (filter === "RATING") {
    renderBooks(books.slice().sort((a, b) => b.rating - a.rating));
  }
}

renderBooks(books);