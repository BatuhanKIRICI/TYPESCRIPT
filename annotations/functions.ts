const add = (a: number, b: number): string => {
  return "a + b";
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

/* const throwError = (message: string): never => {
  throw new Error(message);
}; */

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
