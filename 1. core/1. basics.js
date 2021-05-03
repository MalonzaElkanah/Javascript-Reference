/* 	1. Comments

	2. Variables, 

	3. data types, 

	4. Operators 

	5. Conditional Statements

	6. LOOPS

	7. Iterators

	8. Equality

	9. JavaScript types
*/


//1. Comments
	//a one line comment
	/*This is
	a multi-line
	comment
	*/

//2. Variables
	//1.1 declared by var
var x;
var y;
var z;

var x = 1; //declare variable and provide them with value(initializing)
var y = 2;
var z = 3;
y = 12; //We can also change these values later
	
	//1.2 declared by  const
	//cannot change the value through assignment or be redeclared, and it has to be initialized to a value
const area_code = '51';

	
	//1.3 declared by let 

	

//3. Data Types

	//3.1 Primitive - Number, String, Boolean, Undefined, Null, Symbol (new in ECMAScript 6)

		//3.1.1 Number - can represent both 32-bit integer and 64-bit floating point values
var num = 23; // integer value
var flt = 23.0; //floating point value

//NaN (Not a Number) - occurs when conversion from another type fails.
isNaN(NaN); //true
NaN == NaN; //false
isNaN("javascript"); //true
NaN + 6; //NaN 

//Math global object
Math.pow(2,3) //8

//parseInt() and parseFloat() methods - convert a string expression to an integer or float
parseInt("230",10); 
//230
parseInt("010",10);
//10
parseInt("010",8); //octal base
//8
parseInt("010",2); //binary
//2


			// 3.1.2 String - sequence of Unicode characters
var str = "Hello World";
console.log("Hippopotamus chewing gum"); //Hippopotamus chewing gum

// '\' can be used as special characters.
/*

\n : Newline
\t : Tab
\b : Backspace
\r : Carriage return
\\ : Backslash
\\' : Single quote
\" : Double quote

*/

//String Object
var s = new String("dummy"); //Creates a String object
console.log(s); //"dummy"
console.log(typeof s); //"object"
var nonObject = "1" + "2"; //Create a String primitive
console.log(typeof nonObject); //"string"
var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString); //"object"

//String Helper functions
console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X")); //false

var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase()); //"upppercasestring"
console.log("There are no spaces in the end".trim()); //"There are no spaces in the end"

//Multi-line - Strings enclosed within `
console.log(`string text on first line
string text on second line `);

//string interpolation.
console.log(`Sum of values is :${a+b} and multiplication is :
${a*b}`);

//instanceof operator
var aStringObject = new String("string");
console.log(typeof aStringObject);
//"object"
console.log(aStringObject instanceof String);//true
var aString = "This is a string";
console.log(aString instanceof String);//false


			//3.1.3 Undefined values
//Undefined - value is not assigned to the variable yet
var und = undefined;

var xl;
console.log(typeof xl); //undefined

//null - when the non-value is deliberate
var und = null;
console.log(null==undefined); //true

			// 3.1.4 Boolean
//represented by true and false keywords
var bolTrue = true;
var bolFalse = false;
//False, 0, the empty string (""), NaN, null, and undefined are represented as false
//Everything else is true

//Boolean Objects
var oBooleanTrue = new Boolean(true);
var oBooleanFalse = new Boolean(false);
console.log(oBooleanTrue); //true
console.log(typeof oBooleanTrue); //object
if(oBooleanFalse){
	console.log("I am seriously truthy, don't believe me");
}//"I am seriously truthy, don't believe me"
if(oBooleanTrue){
	console.log("I am also truthy, see ?");
}//"I am also truthy, see ?"

//Use valueOf() to extract real value within the Boolean object
if(oBooleanFalse.valueOf()){
	console.log("With valueOf, I am false");
}else{
	console.log("Without valueOf, I am still truthy");
}//"Without valueOf, I am still truthy"

			// 3.1.5 Symbol
//A Symbol is guaranteed to be unique and immutable.
let s = Symbol();
console.log(typeof s); //symbol



	//3.2 Non-primitive - Object, Array, Date

		//3.2.1 Dates objects
//JavaScript store dates as the number of milliseconds since January 1, 1970, 00:00:00.
var date = new Date([parameters]);

//parameters
// #No parameters creates today's date and time. For example, 
var today = new Date(); 
// #A String representing a date as Month day, year hours:minutes:seconds. For example, 
var twoThousandFifteen = new Date("December 31, 2015 23:59:59"); //If you omit hours, minutes, or seconds, the value will be set to 0.
// #A set of integer values for the year, month, and day. For example, 
var christmas = new Date(2015, 11, 25); 
// #A set of integer values for the year, month, day, hour, minute, and seconds. For example, 
var christmas = new Date(2015, 11, 25, 21, 00, 0);

var today = new Date();
console.log(today.getDate()); //23
console.log(today.getMonth()); //4
console.log(today.getFullYear()); //2021
console.log(today.getHours()); //12
console.log(today.getMinutes()); //30
console.log(today.getSeconds()); //12
//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); //1619170212536
console.log(today.getTimezoneOffset()); //-180 Minutes
//Calculating elapsed time
var start = Date.now();
// loop for a long time
for (var i=0;i<100000;i++);
	var end = Date.now();
	var elapsed = end - start; // elapsed time in milliseconds
	console.log(elapsed); //71


	//3.2.2 objects
var obj = {
	str: "Hello World"
}


	//3.2.3 objects
var arr = [1,2,3,4,5];


//4. Operators

	//4.1 operator +
// no effect on a number.
var a=25;
a=+a;
console.log(a);//No impact on a's value //25

//when applied to a String, the + operator converts it to number
var b="70";
console.log(typeof b); //string
b=+b; //converts string to number
console.log(b); //70
console.log(typeof b); //number

//if the String literal is not something that can be converted to a number
var c="foo";
c=+c; //Converts foo to number
console.log(c); //NaN
console.log(typeof c); //number

//empty strings are converted to 0
var zero="";
zero=+zero; 
console.log(zero);
console.log(typeof zero);



		//4.2 ++ and -- operators
//The ++ operator for adding 1 to a value 
// --  subtract 1 from a value
var a= 1;
var b= a++;
console.log(a); //2
console.log(b); //1

//When ++ is used in the prefix position as ++a
var a= 1;
var b= ++a;
console.log(a); //2
console.log(b); //2



		//4.3 assignments operator
var a, b, c;
a = b = c = 0; //must be declared first



		//4.4 Boolean operators
//three Boolean operators — AND(&), OR(|), and NOT(!).

			//4.4.1 AND(&)
//returns false unless all of the condition set are true.
console.log(true && true); // true AND true returns true
console.log(true && false);// true AND false returns false
console.log(false && true);// false AND true returns false
console.log("Foo" && "Bar");// Foo(true) AND Bar(true) returns true
console.log(false && "Foo");// false && Foo(true) returns false
console.log("Foo" && false);// Foo(true) && false returns false
console.log(false && (1 == 2));// false && false(1==2) returns false

			//4.4.2 OR(|),
//returns true unless all of the condion set are false
console.log(true || true); // true AND true returns true
console.log(true || false);// true AND false returns true
console.log(false || true);// false AND true returns true
console.log("Foo" || "Bar");// Foo(true) AND Bar(true) returns Foo
console.log(false || "Foo");// false && Foo(true) returns Foo
console.log("Foo" || false);// Foo(true) && false returns Foo
console.log(false || (1 == 2));// false && false(1==2) returns false

			//4.4.3 NOT(!)
//it negates a condion, for example:
// #If the operand is an object, false is returned.
var s = new String("string");
console.log(!s);//false
//If the operand is the number 0, true is returned.
var t = 0;
console.log(!t);//true
//If the operand is any number other than 0, false is returned.
var x = 11;
console.log(!x);//false
//If operand is null or NaN, true is returned
var y =null;
var z = NaN;
console.log(!y);//true
console.log(!z);//true
//If operand is undefined, you get true
var foo;
console.log(!foo);//true



//5 Conditional Statements
	//5.1 If-else conditional statements
if (condition1) {
	statement1
} else if (condition2) {
	statement2
} else if (condition3) {
	statement3
}
//..
} else {
	statementN
}


	//5.2 switch-case statements.
//you have break out of every case;
//have a default case to handle any value that cannot be evaluated by any other case.
var day = 2;
switch(day){
	case 1: console.log("Sunday");
		break;
	case 2: console.log("Monday");
		break;
	default:
		console.log("We live in a binary world. Go to Pluto");
}

var allowedToDrive = (age > 21) ? "yes" : "no";

//6. LOOPS

	//6.1 WHILE loops
//iterate a set of expressions till a condition is met.
var i=0;
while(i<10){
	i=i+1;
	console.log(i);
}

	//6.2 DO-WHILE loops
//execute the loop at least once
var choice;
do {
	choice=getChoiceFromUserInput();
} while(!isInputValid(input));


	//6.3 For loop
for (var i=0;i<5;i++){
	console.log("Hello");
}

var x=0;
//Omit initialitzation
for (;x<5;x++){
	console.log("Hello");
}
//Omit exit condition
for (var j=0;;j++){
//exit condition
	if(j>=5){
		break;
	}else{
		console.log("Hello");
	}
}
//Omit increment
for (var k=0; k<5;){
	console.log("Hello");
	k++;
}

var arr = [10, 20, 30];
// Assign all array values to 100
for (i = 0; i < arr.length; arr[i++] = 100);
console.log(arr);

//for..in :
	//for..in loop, you can iterate over indexes of the list array
array.
var list = ['Sunday','Monday','Tuesday'];
for (let i in list){
console.log(i); //0 1 2
}

//for..of 
	//for..of loop lets you iterate over the values stored in the list
for (let i of list){
console.log(i); //Sunday Monday Tuesday
}




//7. Iterators
	//iterators have a next() method that returns an object. The returning object has two properties— 
		//value (the next value) and 
		//done (indicates whether the last result has been reached)
var a = [1,2];
var i = a[Symbol.iterator]();
console.log(i.next());
// { value: 1, done: false }
console.log(i.next());
// { value: 2, done: false }
console.log(i.next());
// { value: undefined, done: true }


//8 Equality

	// 8.1 loose equality(==)
//perform the type conversion when comparing two values

"" == "0" //false
0 == "" //true
0 == "0" //true
false == "false" //false
false == "0" //true
false == undefined //false
false == null //false
null == undefined //true


	// 8.2 strict equality
//check the values without any type conversion.
// #If the values are of a different type, they are unequal.
// #For non-numerical values of the same type, they are equal if their values are the same.
// #For primitive numbers, strict equality works for values. If the values are the same, === results in true. 
// #However, a NaN doesn't equal to any number.

"" === "0" //false
0 === ""// false
0 === "0" //false
false === "false" //false
false === "0" //false
false === undefined //false
false === null //false
null === undefined //false

{} === {}; //false
new String('bah') === 'bah'; //false
new Number(1) === 1; //false
var bar = {}; 
bar === bar; //true



//9 JavaScript types
	// 9.1 toString()
	//convert an entity to a String 
var fortyTwo = 42;
console.log(fortyTwo.toString()[1]); //prints "2"


	//9.2 toNumber()
	//convert an entity to a Number
//convert true becomes 1 
//undefined becomes NaN
//false becomes 0
//null becomes 0 . 
//if strings fails, the method returns NaN .

	//9.3 toBoolean()
	//convert an entity to a Boolean


	//9.4 typeof operator
	// check javascript type of an entity
typeof 1; //"number"
typeof "1"; //"string"
typeof { age: 39 } //"object"
typeof Symbol(); //"symbol"
typeof undefined; //"undefined"
typeof true; //"boolean"

f = function test() {
	return 12;
}
typeof f; //"function"
typeof [1,2,3,4]; //"object"


