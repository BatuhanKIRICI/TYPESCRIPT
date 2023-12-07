class Circle {
  static pi = 3.14;
  pi = 3;

  constructor() {
    this.pi++;
    Circle.pi++;
  }

  static calculate(radius: number): number {
    return this.pi * radius * radius;
  }
}

let circle = new Circle();

console.log(circle);

console.log(Circle.calculate(10));
