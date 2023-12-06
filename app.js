function accumulator() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (number) { return (total += number); });
    return total;
}
console.log(accumulator(5, 10, 45, 100, -70));
