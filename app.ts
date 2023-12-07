abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }
  printMeeting(): void {
    console.log("Abstract");
  }

  generateReports(): void {
    console.log("Generate");
  }
}

let department: Department;

department = new AccountingDepartment();

department.printName();
department.generateReports();
department.printMeeting();
