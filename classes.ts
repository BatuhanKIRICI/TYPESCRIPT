class Vehicle {
  // color: string = "red";

  /* constructor(color: string) {
    this.color = color;
  } */

  constructor(public color: string) {}

  protected honk(): void {
    console.log("Beep!");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("Live long!");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

/* const car = new Car();
car.drive();
car.honk(); */
