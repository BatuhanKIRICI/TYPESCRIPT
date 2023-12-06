var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Book);
console.log(PrintMedia["Magazine"]);
