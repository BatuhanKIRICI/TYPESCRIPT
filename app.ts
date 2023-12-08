interface Person {
  name: string;
  id: number;
}

interface Contact {
  phone: number;
  email: string | number;
}

type Employee = Person | Contact;

let person: Employee = {
  name: "Bill",
  // id: 23,
  phone: 46568787132,
  email: `dfbnflbknfklf@hotmail.com`,
};

console.log(person);
