function getInfo(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    else {
        return "".concat(person.firstName, " ").concat(person.lastName);
    }
}
var info = {
    firstName: "Luke",
    lastName: "Lowry",
    middleName: "Lynn",
};
info.firstName = "Lucas";
info.middleName = "";
console.log(getInfo(info));
