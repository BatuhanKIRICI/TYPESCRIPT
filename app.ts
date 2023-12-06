enum Media {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}

console.log(PrintMedia.Book);
console.log(PrintMedia["Magazine"]);
