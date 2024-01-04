class Vehicle {
  drive(): void {
    console.log("Live fast!");
  }
  honk(): void {
    console.log("Beep!");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Live long!");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
