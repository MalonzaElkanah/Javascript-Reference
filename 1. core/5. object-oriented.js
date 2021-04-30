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

		//1. private variables - declared using the var keyword in a function. 
		//They can be accessed by private functions or privileged methods.

		//2. Private functions - declared in an object's constructor & called by privileged methods.

		//3. Privileged methods can be declared with this.method=function() {}

		//4. Public methods are declared with Class.prototype.method=function(){}

		//5. Public properties can be declared with this.property and accessed from out

function Player(name,sport,age,country){
	this.constructor.noOfPlayers++;

	// Private Properties and Functions
	// Can only be viewed, edited or invoked by privileged members
	var retirementAge = 40;
	var available=true;
	var playerAge = age?age:18;
	function isAvailable(){ 
		return available && (playerAge<retirementAge); 
	}
	var playerName=name ? name :"Unknown";
	var playerSport = sport ? sport : "Unknown";

	// Privileged Methods
	// Can be invoked from outside and can access private members
	// Can be replaced with public counterparts
	this.book=function(){
		if (!isAvailable()){
			this.available=false;
		} else {
			console.log("Player is unavailable");
		}
	};
	this.getSport=function(){ return playerSport; };

	// Public properties, modifiable from anywhere
	this.batPreference="Lefty";
	this.hasCelebGirlfriend=false;
	this.endorses="Super Brand";
}
// Public methods - can be read or written by anyone
// Can only access public and prototype properties
Player.prototype.switchHands = function(){ this.batPreference="righty"; };
Player.prototype.dateCeleb = function(){ this.hasCelebGirlfriend=true; } ;
Player.prototype.fixEyes = function(){ this.wearGlasses=false; };

// Prototype Properties - can be read or written by anyone (or overridden)
Player.prototype.wearsGlasses=true;
// Static Properties - anyone can read or write
Player.noOfPlayers = 0;
(function PlayerTest(){
	//New instance of the Player object created.
	var cricketer=new Player("Vivian","Cricket",23,"England");
	var golfer =new Player("Pete","Golf",32,"USA");
	console.log("So far there are " + Player.noOfPlayers + " in theguild");
	//Both these functions share the common 'Player.prototype.wearsGlasses' variable
	cricketer.fixEyes();
	golfer.fixEyes();
	cricketer.endorses="Other Brand";//public variable can be updated
	//Both Player's public method is now changed via their prototype
	Player.prototype.fixEyes=function(){
		this.wearGlasses=true;
	};
	//Only Cricketer's function is changed
	cricketer.switchHands=function(){
		this.batPreference="undecided";
	};
})();


//3. Inheritance
	//js uses prototypes for inheritance. In prototypal inheritance, instances inherit from other instances.
function Person() {}
Person.prototype.cry = function() {
	console.log("Crying");
}
function Child() {}
Child.prototype = {cry: Person.prototype.cry}; 
var aChild = new Child();
console.log(aChild instanceof Child); //true
console.log(aChild instanceof Person); //false
console.log(aChild instanceof Object); //true
//Above is just copying or masquerading, not inheritance

	//inheritance is done using an instance of an object as a prototype as follows:
SubClass.prototype = new SuperClass();
Child.prototype = new Person();

function Person() {}
Person.prototype.cry = function() {
	console.log("Crying");
}
function Child() {}
Child.prototype = new Person();
var aChild = new Child();
console.log(aChild instanceof Child); //true
console.log(aChild instanceof Person); //true
console.log(aChild instanceof Object); //true

	//Example



//			 | -> Individual Contributor
//employee  -|
//			 | -> Manager	-> Team Leader	-> Engineer



//define our Employee
function Employee() {
	this.name = '';
	this.dept = 'None';
	this.salary = 0.00;
}

//define Manager
function Manager() {
	Employee.call(this);
	this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function IndividualContributor() {
	Employee.call(this);
	this.active_projects = [];
}
IndividualContributor.prototype = Object.create(Employee.prototype);

function TeamLead() {
	Manager.call(this);
	this.dept = "Software";
	this.salary = 100000;
}
TeamLead.prototype = Object.create(Manager.prototype);

function Engineer() {
	TeamLead.call(this);
	this.dept = "JavaScript";
	this.desktop_id = "8822" ;
	this.salary = 80000;
}
Engineer.prototype = Object.create(TeamLead.prototype);


//instantiate these objects:
var genericEmployee = new Employee();
console.log(genericEmployee);
/*
[object Object] {
	dept: "None",
	name: "",
	salary: 0
}
*/

//instantiate a manager
var karen = new Manager();
karen.name = "Karen";
karen.reports = [1,2,3];
console.log(karen);
/*
[object Object] {
	dept: "None",
	name: "Karen",
	reports: [1, 2, 3],
	salary: 0
}
*/

//TeamLead , the reports property is derived from the base class (Manager)
var jason = new TeamLead();
jason.name = "Json";
console.log(jason);
/*
[object Object] {
	dept: "Software",
	name: "Json",
	reports: [],
	salary: 100000
}
*/


//change the value of a property at runtime and have the new value be inherited by all the descendants
function Employee() {
	this.dept = 'None';
	this.salary = 0.00;
}

Employee.prototype.name = '';
function Manager() {
	this.reports = [];
}

Manager.prototype = new Employee();
var sandy = new Manager();
var karen = new Manager();
Employee.prototype.name = "Junk";
console.log(sandy.name); //Junk
console.log(karen.name); //Junk

//In js Object, Array, String, Number, RegExp, and Function—have prototype properties that can be extended.
String.prototype.reverse = function() {
	return Array.prototype.reverse.apply(this.split('')).join('');
};
var str = 'JavaScript';
console.log(str.reverse()); //"tpircSavaJ"


//4. Getters and setters
var person = {
	firstname: "Albert",
	lastname: "Einstein",
	setLastName: function(_lastname){
		this.lastname= _lastname;
	},
	setFirstName: function (_firstname){
		this.firstname= _firstname;
	},
	getFullName: function (){
		return this.firstname + ' '+ this.lastname;
	}
};
person.setLastName('Newton');
person.setFirstName('Issac');
console.log(person.getFullName());


//getters and setters created using the object literal syntax in ECMAScript 5
var person = {
	firstname: "Albert",
	lastname: "Einstein",
	get fullname() {
		return this.firstname +" "+this.lastname;
	},
	set fullname(_name){
		var words = _name.toString().split(' ');
		this.firstname = words[0];
		this.lastname = words[1];
	}
};
person.fullname = "Issac Newton";
console.log(person.firstname); //"Issac"
console.log(person.lastname); //"Newton"
console.log(person.fullname); //"Issac Newton"


//getters and setters is using the Object.defineProperty()
var person = {
	firstname: "Albert",
	lastname: "Einstein",
};
Object.defineProperty(person, 'fullname', {
	get: function() {
	return this.firstname + ' ' + this.lastname;
	},
	set: function(name) {
		var words = name.split(' ');
		this.firstname = words[0];
		this.lastname = words[1];
	}
});
person.fullname = "Issac Newton";
console.log(person.firstname); //"Issac"
console.log(person.lastname); //"Newton"
console.log(person.fullname); //"Issac Newton"



