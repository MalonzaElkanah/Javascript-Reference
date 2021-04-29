/*
	1. Introduction
		1.1 Object and Properties
		1.2 Accessing Properties of an object
		1.3 update values
		1.4 Methods
		1.5 prototypes

	2. Instance properties versus prototype properties
		2.1 Instance properties
		2.2 this keyword


	3. Inheritance

	4. Getters and setters

*/


//1. Introduction
	//1.1 an object contains properties, defined as a key-value pair. 
		//A property key (name) can be a string and the value can be any valid value.
var nothing = {};
var author = {
	"firstname": "Douglas",
	"lastname": "Crockford"
}
		//You can omit quotes around the property name if the name is a legal JavaScript name. 
		//i.e So quotes are required around first-name but are optional around firstname.
		//You can nest objects
var author = {
	firstname : "Douglas",
	lastname : "Crockford",
	book : {
		title:"JavaScript- The Good Parts",
		pages:"172"
	}
};


	//1.2 Accessing Properties of an object: 
		//the array-like notation
console.log(author['firstname']); //Douglas
		//dot notation.
console.log(author.lastname); //Crockford
console.log(author.book.title);// JavaScript- The Good Parts

		//retrieve a non-existent value
console.log(author.age); //undefined
		//|| operator to fill in default values
console.log(author.age || "No Age Found");


	//1.3 update values of an object
author.book.pages = 190;
console.log(author.book.pages); //190


	//1.4 Methods
		//properties of an object that can hold function values
var meetingRoom = {};
meetingRoom.book = function(roomId){
	console.log("booked meeting room -"+roomId);
}
meetingRoom.book("VL");


	
	//1.5 prototypes
		//default property for almost all objects
		//used as a way to define properties and functions that will be applied to instances of objects.

		//Object.getPrototypeOf() function returns the prototype of an object
function Player() {} //A function that returns nothing and creates nothing
Player.prototype.usesBat = function() { //Add a function to the prototype property of the function
	return true;
}
var crazyBob = Player();//We call player() as a function and prove that nothing happens
if(crazyBob === undefined){
	console.log("CrazyBob is not defined");
}
//Now we call player() as a constructor along with 'new'
var swingJay = new Player(); //1. The instance is created
if(swingJay && swingJay.usesBat && swingJay.usesBat()){
	//2. method usesBat() is derived from the prototype of the function
	console.log("SwingJay exists and can use bat");
}



//2. Instance properties versus prototype properties

	//2.1 Instance properties are the properties that are part of the object instance itself
function Player() {
	this.isAvailable = function() {
		return "Instance method says - he is hired";
	};
}
Player.prototype.isAvailable = function() {
	return "Prototype method says - he is Not hired";
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable()); //he is hired


	//2.2 this keyword
		//in js, value of this is determined by the invocation context of a function and where it is called.

			//1. this in a global context. 
				//it is bound to the global context. i.e, in browser, the global context is usually window 
function globalAlias(){
	return this;
}
console.log(globalAlias()); //[object Window]

			//2. this in an object method
var f = {
	name: "f",
	func: function () {
		return this;
	}
};
console.log(f.func());
//prints -
/*
[object Object] {
	func: function () {
		return this;
	},
	name: "f"
}
*/

			//3. this in a constructor function
				//when a function is called with a new keyword, it acts as a constructor. 
				//In a constructor, this points to the object being constructed.
var member = "global";
function f(){
	this.member = "f";
}
var o= new f();
console.log(o.member); // f


	//we can achieve access modifiers such as private and public using the function scope



//3. Inheritance








//4. Getters and setters