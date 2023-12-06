interface Employee {
  name: string;
  code: number;
}

let employee = <Employee>{};

employee.name = "Jason";

console.log(typeof employee);
console.log(employee);
