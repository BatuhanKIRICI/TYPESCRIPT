interface Person {
  readonly firstName: string;
  lastName: string;
  middleName?: string;
}

function getInfo(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  } else {
    return `${person.firstName} ${person.lastName}`;
  }
}

let info: Person = {
  firstName: "Luke",
  lastName: "Lowry",
  middleName: "Lynn",
};

info.firstName = "Lucas";
info.middleName = "";

console.log(getInfo(info));
