// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to initialize name and age
  this.jobTitle = jobTitle; // Initialize jobTitle property
}

// Inherit the methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Set constructor back to Employee

// Add jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
