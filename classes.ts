class Vehicle {
  drive(): void {
    console.log("Live fast!");
  }
  honk(): void {
    console.log("Beep!");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
