function total(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  } else {
    return a * b;
  }
}

// console.log(total(5, 6));

const multiply = (x: number, y: number): number => x * y;

console.log(multiply(8, 9));
