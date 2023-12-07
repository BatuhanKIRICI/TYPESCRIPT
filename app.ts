interface Person {
  firstName: string;
  lastName: string;
}

function getInfo(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let info = {
  firstName: "Luke",
  lastName: "Lowry",
};

console.log(getInfo(info));
