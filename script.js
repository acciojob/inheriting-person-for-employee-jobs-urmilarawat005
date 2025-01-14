// 1. Person Class
class Person {
  constructor(name, age) {
    this.name = name;  // Person ka naam
    this.age = age;    // Person ki umar
  }

  // greet method: Insaan ka introduction
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// 2. Employee Class (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Person class ka constructor call kiya (name aur age set karne ke liye)
    this.jobTitle = jobTitle;  // Job title ko set kiya
  }

  // jobGreet method: Employee ka introduction, job title ke saath
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example Usage:

// Person class ka object create karte hain
const person = new Person("Alice", 25);
person.greet();  // Expected output: Hello, my name is Alice, I am 25 years old.

// Employee class ka object create karte hain
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

window.Person = Person;
window.employee = employee;
