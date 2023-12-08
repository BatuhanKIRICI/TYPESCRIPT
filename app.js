var employee = {
    empNumber: 45,
    gender: "male",
    name: "Sammy",
};
var department = {
    gender: "female",
    name: "Lily",
    empDepartment: "HR",
};
console.log(employee);
console.log(department);
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        (this.empNumber = empNumber), (this.name = name), (this.gender = gender);
    }
    return Employee;
}());
var person = new Employee(77, "Nathan", "male");
console.log(person);
