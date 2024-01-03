const carMakers: string[] = ["toyota", "bmw", "ford"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["corolla"], ["525i"], ["focus"]];

carMakers.push(100);

carMakers.map((car: string): string => {
  return car;
});

const importantDate: (Date | string)[] = [new Date()];
importantDate.push("2027-08-08");
importantDate.push(new Date());
importantDate.push(61616);
