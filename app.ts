class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(my_id: number, my_firstName: string, my_lastName: string) {
    this.id = my_id;
    this.firstName = my_firstName;
    this.lastName = my_lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}

let employee = new Employee(50, "Adam", "Smith");

console.log(employee.getFullName());

// let personInfo = new Person(45, "Gary", "Zimmermann");

// console.log(personInfo.id);
// personInfo.firstName = "Anthony";
// console.log(personInfo.firstName);
// console.log(personInfo.lastName);
// console.log(personInfo.getFullName());
