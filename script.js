// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person prototype.greet = function(){
		console.log(`hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobtitle = jobTitle;
}

Employee.prototype.jobGreet = function(){
		console.log(`hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
};



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;













