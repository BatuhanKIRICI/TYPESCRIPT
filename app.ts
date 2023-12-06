class Person {
  public id: number;
  readonly firstName: string;
  protected lastName: string;

  constructor(my_id: number, my_firstName: string, my_lastName: string) {
    this.id = my_id;
    this.firstName = my_firstName;
    this.lastName = my_lastName;
  }

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personInfo = new Person(45, "Gary", "Zimmermann");

console.log(personInfo.id);
personInfo.firstName = "Anthony";
console.log(personInfo.firstName);
console.log(personInfo.lastName);
console.log(personInfo.getFullName());
