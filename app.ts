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

let personInfo = new Person(45, "Gary", "Zimmermann");

console.log(personInfo);
console.log(personInfo.getFullName());
