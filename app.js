function getInfo(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var info = {
    firstName: "Luke",
    lastName: "Lowry",
};
console.log(getInfo(info));
