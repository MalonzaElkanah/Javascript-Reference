/* 	1. Functions
	2. Scoping 

	3. data types, 
	4. Operators 
	5. Conditional Statements
	6. LOOPS
	7. Equality
	8. JavaScript types
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


