/* 	1. Functions
		1.1. Function literals
		1.2. Functions as data

	2. Scoping 
		2.1 Global scope
		2.2 Local scope
		2.3 IIFE(Immediately Invoked Function Expression)
		2.4 Inline function expressions
		2.5 Block scope
		2.6 difference between the two types of declarations(functional and expression)

	3. The arguments parameter 

	4. Method 

	5. Anonymous functions
		5.1 A.F - creating an object
		5.2 A.F - creating a list
		5.3 A.F - parameter to another function
		5.2 A.F - conditional logic

	6. Closures

	7. Timers and callbacks

	8. Private variables

	9. Loops and Closures

	10 Modules
*/



//1. Functions

	//1.1 Function literals
		//create by 'function' keyword.
function demo(){
	console.log("Hello World, Have just created my first function.");
}
		//Calling a function
demo();

		//parameters
function sum(a, b){
	console.log("Sum of A and B is: ",a+b);
}
sum(10, 20); //30
sum(3, 8); //11

		//declaring using function expressions
var add = function(a,b){
	return a+b;
}
add(1,2); //3

		//recursive calls - function calls itself
		// anonymous function - a function without a name
var facto = function factorial(n) {
	if (n <= 1)
		return 1;
	return n * factorial(n - 1);
};

		//You can also pass a function as a parameter to another function
function changeCase(val) {
	return val.toUpperCase();
}
function demofunc(a, passfunction) {
	console.log(passfunction(a));
}
demofunc("smallcase", changeCase);

	//A function may or may not return a value
	//calling return explicitly allows you to conditionally return from a function
var looper = function(x){
	if (x%5===0) {
		return;		//the code simply returns from the function and the rest of the code is not executed.
	}
	console.log(x)
}
for(var i=1;i<10;i++){
	looper(i);
} //prints 1 , 2 , 3 , 4 , 6 , 7 , 8 , and 9 , and not 5



	// 1.2 Functions as data
		//functions can be assigned to variables, and variables are data
//example 1
var say = console.log;
say("I can also say things");
//exampe 2
var validateDataForAge = function(data) {
	person = data();
	console.log(person);
	if (person.age <1 || person.age > 99){
		return true;
	}else{
		return false;
	}
};
var errorHandlerForAge = function(error) {
	console.log("Error while processing age");
};
function parseRequest(data,validateData,errorHandler) {
	var error = validateData(data);
	if (!error) {
		console.log("no errors");
	} else {
		errorHandler();
	}
}
var generateDataForScientist = function() {
	return {
		name: "Albert Einstein",
		age : Math.floor(Math.random() * (100 - 1)) + 1,
	};
};
var generateDataForComposer = function() {
	return {
		name: "J S Bach",
		age : Math.floor(Math.random() * (100 - 1)) + 1,
	};
};
//parse request
parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);


//2. Scoping 
	//Scopes can be globally or locally defined



	// 2.1 Global scope
		//created by placing a var statement outside any function
		//omit the var statement while declaring a variable (implied globals)

var a = 1;
function scopeTest() {
	a = 2; //Overwrites global variable 2, you omit 'var'
	console.log(a);
}
console.log(a); //prints 1
scopeTest(); //prints 2
console.log(a); //prints 2 (global value is overwritten)



	// 2.2 Local scope
		//Variables declared within a function are local variables and are only accessible within that 
		//function or by functions inside that function

var scope_name = "Global";
function showScopeName () {
	// local variable; only accessible in this function
	var scope_name = "Local";
	console.log (scope_name); // Local
}
console.log (scope_name); //prints - Global
showScopeName(); //prints – Local




	//2.3 IIFE(Immediately Invoked Function Expression)

		//In above and Below example we introduce the function scope by creating a new function to the global
		//scope and called this function later to execute the code.

var a = 1;
function foo() { //1. Add a named function foo() into the global scope
	var a = 2;
	console.log( a ); // 2
}
foo();//2. Now call the named function foo()
console.log( a ); // 1

		//you can solve both these problems by creating functions that immediately get executed
var a = 1;
(function foo() { //1. Add a named function foo() into the global scope
	var a = 2;
	console.log( a ); // 2
})(); //<---this function executes immediately
console.log( a ); // 1

		// The above self-invoking function expressions are called IIFE(Immediately Invoked Function Expression)
(function foo(){ /* code */ })();

(function sayHello() {
	console.log("hello!");
})();

		// You can pass parameters to IIFEs.	 
(function foo(b) {
	var a = 2;
	console.log( a + b );
})(3); //prints 5


	


	//2.4 Inline function expressions
		//functions are passed as parameters to other functions:
function setActiveTab(activeTabHandler, tab){
	//set active tab
	//call handler
	activeTabHandler();
}
setActiveTab( function (){
	console.log( "Setting active tab" );
}, 1 ); //prints "Setting active tab"



	//2.5 Block scopes
		//the let keyword to introduce traditional block scope.
var foo = true;
if (foo) {
	let bar = 42; //variable bar is local in this block { }
	console.log( bar );
}
console.log( bar ); // ReferenceError



	//2.6 difference between the two types of declarations
		//Function expression
functionOne();
//Error
//"TypeError: functionOne is not a function
var functionOne = function() {
	console.log("functionOne");
};


		//Function declaration
functionTwo();
//No error
//Prints - functionTwo
function functionTwo() {
	console.log("functionTwo");
}



//3 The arguments parameter
	//The arguments parameter is a collection of all the arguments passed to the function

var sum = function () {
	var i, total = 0;
	for (i = 0; i < arguments.length; i += 1) {
		total += arguments[i];
	}
	return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9)); // prints 45
console.log(sum(1,2,3,4,5)); // prints 15


	//arguments parameter is not really an array; it is possible to convert it to an array :
var args = Array.prototype.slice.call(arguments);



//4 Method
	//This is a function tied to a property on an object. For methods, 
	//this is bound to the object on invocation

var person = {
	name: 'Albert Einstein',
	age: 66,
	greet: function () {
		console.log(this.name); 
		//this is bound to the person object on invoking greet because greet is a method of person
	}
};
person.greet();



// 5. Anonymous functions
//used in cases where the function doesn't need to have a name for later reference

	
	//5.1 A.F - creating an object
var santa = {
	say :function(){
		console.log("ho ho ho");
	}
}
santa.say();


	//5.2 A.F - creating a list
	//creating anonymous functions and adding them to an array.
var things = [
	function() { alert("ThingOne") },
	function() { alert("ThingTwo") },
];
for(var x=0; x<things.length; x++) {
	things[x]();
}


	//5.3 A.F - parameter to another function
// function statement
function eventHandler(event){
	event();
}
eventHandler(function(){
	//do a lot of event related things
	console.log("Event fired");
});



	//5.4 A.F - conditional logic
var shape;
if(shape_name === "SQUARE") {
	shape = function() {
		return "drawing square";
	}
} else {
	shape = function() {
		return "drawing square";
	}
}
alert(shape());



//6. Closures
/*closure is the scope created when a function is declared that allows the
function to access and manipulate variables that are external to this function*/


var outer='outer';
var copy;
function outerFn() {
	var inner='inner';
	function innerFn(param){
		console.log(outer);
		console.log(inner);
		console.log(param);
		console.log(magic);
	}
	copy=innerFn;
}
console.log(magic); //ERROR: magic not defined
var magic="Magic";
outerFn();
copy("copy");

/*All variables in an outer scope are included even if they are declared after the function is declared. 
This makes it possible for the line, console.log(magic) , in innerFn() , to work.*/


//7. Timers and callbacks
function delay(message) {
	setTimeout( function timerFn(){
		console.log( message );
	}, 1000 );
}
delay( "Hello World" );
//We pass the inner timerFn() function to the built-in library function, setTimeout() .



//8. Private variables
//Closures are frequently used to encapsulate some information as private variables.
function privateTest(){
	var points=0;
	this.getPoints=function(){
		return points;
	};
	this.score=function(){
		points++;
	};
}
var private = new privateTest();
private.score();
console.log(private.points); // undefined
console.log(private.getPoints());




//9. Loops and closures

//Below code prints 6 , 6 , 6 , 6 , 6 at an interval of 100 ms instead of 1, 2, 3, 4, 5
for (var i=1; i<=5; i++) {
	setTimeout( function delay(){
		console.log( i );
	}, i*100);
}
//the timeout function callbacks are running after the completion of the loop

//FIX: We can introduce a function scope and local copy of the i variable in that scope.
for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function delay(){
			console.log( j );
		}, j*100);
	})( i );
}



//10 Modules
/*Modules are used to mimic classes and focus on public and private access to
variables and functions.*/
Var moduleName=function() {
	//private state
	//private functions
	return {
		//public state
		//public variables
	}
}

//condions
	/* 	1. There must be an outer enclosing function that needs to be executed at least once.

		2.This enclosing function must return at least one inner function. 
		This is necessary to create a closure over the private state—without this, you can't
		access the private state at all*/


//example
var superModule = (function (){
	var secret = 'supersecretkey';
	var passcode = 'nuke';
	function getSecret() {
		console.log( secret );
	}
	function getPassCode() {
		console.log( passcode );
	}
	return {
		getSecret: getSecret,
		getPassCode: getPassCode
	};
})();
superModule.getSecret();
superModule.getPassCode();
