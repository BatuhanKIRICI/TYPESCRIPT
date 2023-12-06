function accumulator(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((number) => (total += number));
  return total;
}

console.log(accumulator(5, 10, 45, 100, -70));
