class Vehicle {
  public drive(): void {
    console.log("Live fast!");
  }
  private honk(): void {
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

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
vehicle.startDrivingProcess();

const car = new Car();
car.drive();
car.honk();
