let colors: string[] = ["red", "green", "blue"];
let things: boolean[] = [true, false];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const info = '{"name":"Mike","age":25}';

const parsedInfo: { name: string; age: number } = JSON.parse(info);

console.log(parsedInfo);

let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

let numbers = [-12, -1, 56];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
