class Student {
  fullNmae: string;

  constructor(
    public firstName: string,
    middleName: string,
    public lastName: string
  ) {
    this.fullNmae = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + person.lastName;
}

let user = new Student("Jane", "M", "User");

document.body.innerHTML = greeter(user);
