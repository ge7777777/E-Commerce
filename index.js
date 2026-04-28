let books = [
  {
    id: 1,
    title: "Crack the Coding Interview",
    url: "assets/crack the coding interview.png",
    originalPrice: 49.95,
    salePrice: 14.95,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Atomic Habits",
    url: "assets/atomic habits.jpg",
    originalPrice: 39.95,
    salePrice: null,
    rating: 5,
  },
  {
    id: 3,
    title: "Deep Work",
    url: "assets/deep work.jpeg",
    originalPrice: 29.95,
    salePrice: 12.95,
    rating: 5,
  },
  {
    id: 4,
    title: "The 10X Rule",
    url: "assets/book-1.jpeg",
    originalPrice: 44.95,
    salePrice: 19.95,
    rating: 4.5,
  },
  {
    id: 5,
    title: "Be Obsessed Or Be Average",
    url: "assets/book-2.jpeg",
    originalPrice: 32.95,
    salePrice: 17.95,
    rating: 4,
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    url: "assets/book-3.jpeg",
    originalPrice: 70.95,
    salePrice: 12.95,
    rating: 5,
  },
  {
    id: 7,
    title: "Cashflow Quadrant",
    url: "assets/book-4.jpeg",
    originalPrice: 11.95,
    salePrice: 10.95,
    rating: 4,
  },
  {
    id: 8,
    title: "48 Laws of Power",
    url: "assets/book-5.jpeg",
    originalPrice: 38.95,
    salePrice: 17.95,
    rating: 4.5,
  },
  {
    id: 9,
    title: "The 5 Second Rule",
    url: "assets/book-6.jpeg",
    originalPrice: 35.95,
    salePrice: null,
    rating: 4,
  },
  {
    id: 10,
    title: "Your Next Five Moves",
    url: "assets/book-7.jpg",
    originalPrice: 40.95,
    salePrice: null,
    rating: 4,
  },
  {
    id: 11,
    title: "Mastery",
    url: "assets/book-8.jpeg",
    originalPrice: 30.95,
    salePrice: null,
    rating: 4.5,
  },
];

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}