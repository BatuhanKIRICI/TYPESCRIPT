type person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let teacher: person;

teacher = {
  firstName: "Keith",
  lastName: "Smith",
  age: 25,
  jobTitle: "Software Engineer",
};

console.log(teacher.jobTitle);
