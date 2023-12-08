function getRandom<T>(items: T[]): T {
  let random = Math.floor(Math.random() * items.length);
  return items[random];
}

const strings = ["emily", "phil", "frank"];
const numbers = [8, 65, 23, 9, 0];

console.log(getRandom<string>(strings));
console.log(getRandom(numbers));
