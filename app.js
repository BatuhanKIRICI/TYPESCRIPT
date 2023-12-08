function getRandom(items) {
    var random = Math.floor(Math.random() * items.length);
    return items[random];
}
var strings = ["emily", "phil", "frank"];
var numbers = [8, 65, 23, 9, 0];
console.log(getRandom(strings));
console.log(getRandom(numbers));
