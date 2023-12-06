function total(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    else {
        return a * b;
    }
}
// console.log(total(5, 6));
var multiply = function (x, y) { return x * y; };
console.log(multiply(8, 9));
