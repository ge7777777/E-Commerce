const booksWrapper = document.querySelector(".books");

const books = [
{
 title: "Atomic Habits",
 url: "assets/atomic habits.jpg",
 originalPrice: 39.95,
 rating: 5
},
{
 title: "Deep Work",
 url: "assets/deep work.jpeg",
 originalPrice: 29.95,
 salePrice: 12.95,
 rating: 5
},
// rest of books...
];

function renderBooks(container, books) {

container.innerHTML = books.map(book => `
<div class="book">
   <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}">
   </figure>

   <h3 class="book__title">
      ${book.title}
   </h3>

   <div class="book__ratings">
      ${getRatingHTML(book.rating)}
   </div>

   <div class="book__price">
      ${book.salePrice 
        ? `<span class="book__price--normal">$${book.originalPrice}</span> $${book.salePrice}`
        : `$${book.originalPrice}`
      }
   </div>

</div>
`).join("");

}

function getRatingHTML(rating) {
 let stars = "";

 for(let i = 0; i < Math.floor(rating); i++) {
   stars += '<i class="fas fa-star"></i>';
 }

 if(rating % 1 !== 0){
   stars += '<i class="fas fa-star-half-alt"></i>';
 }

 return stars;
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