const drink = {
  color: "brown",
  carbonated: true,
  sugar: 50,
};

// const beverage: [string, boolean, number] = ["brown", true, 50];

type Drink = [string, boolean, number]; //Type alias

const beverage: Drink = ["brown", true, 50];
const beverage2: Drink = ["white", false, 88];
