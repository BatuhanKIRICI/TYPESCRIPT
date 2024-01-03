interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`${vehicle.name}, ${vehicle.year}, ${vehicle.broken}`);
};

printVehicle(oldCivic);
