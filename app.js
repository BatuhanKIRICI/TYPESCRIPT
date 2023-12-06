var Person = /** @class */ (function () {
    function Person(my_id, my_firstName, my_lastName) {
        this.id = my_id;
        this.firstName = my_firstName;
        this.lastName = my_lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var personInfo = new Person(45, "Gary", "Zimmermann");
console.log(personInfo.id);
console.log(personInfo.firstName);
console.log(personInfo.lastName);
console.log(personInfo.getFullName());
