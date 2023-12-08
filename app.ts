interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empNumber: number;
}

interface IDepartment extends IPerson {
  empDepartment: string;
}

let employee: IEmployee = {
  empNumber: 45,
  gender: "male",
  name: "Sammy",
};

let department: IDepartment = {
  gender: "female",
  name: "Lily",
  empDepartment: "HR",
};

console.log(employee);
console.log(department);

class Employee implements IPerson {
  empNumber: number;
  name: string;
  gender: string;
  constructor(empNumber: number, name: string, gender: string) {
    (this.empNumber = empNumber), (this.name = name), (this.gender = gender);
  }
}

let person = new Employee(77, "Nathan", "male");

console.log(person);
