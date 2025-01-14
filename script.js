class Person {
	constructor (name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
			console.log(`hello my name  ${this.name}, I am ${this.age} year old.`);
		
	}
}
  class Employee extends Person{
	  constructor (name, age, jobTitle){
		  super(name, age);
			this.jobtitle = jobTitle;
	  }

	  jobGreet(){
		  console.log(`hello, my name is ${this.name} , I am ${this.age} year old and my job title is ${this.jobTitle}.`);
	  }
  }

  const person = new person("Urmila", 22);
  person.greet();

 const employee = new employee("Bob", 30, Manager);
 employee.jobGreet();











