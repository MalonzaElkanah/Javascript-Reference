/* 	
	1. Arrays
		1.1. introductions
		1.2. iterate over the values of an array
		1.3 Array methods

	2. Maps
		2.1 test()
		2.2 exec()
		2.3 match()
		2.4 replace()
		2.5 split() 

	3. Sets
		3.1 Set of Characters []
		3.2 Match anything but the pattern ^
		3.3 sequential range of characters or numbers [-]
		3.4 literal character \
		3.5 character groups shortcut notations

*/


//1. ARRAY
	//1.1 Introductions
		//three ways to create arrays
var arr = new Array(1,2,3);
var arr = Array(1,2,3);
var arr = [1,2,3]; //array literal

		//length property is equal to the number of arguments.
		//to initialize an array with a single element and the element happens to be a number use literal
var arr = [10];
var arr = Array(10); // Creates an array with no element, but with arr.length set to 10
// The above code is equivalent to
var arr = [];
arr.length = 10;

		//You can populate an array by assigning values to its elements:
var days = [];
days[0] = "Sunday";
days[1] = "Monday";

		//You can also populate an array when you create it:
var arr_generic = new Array("A String", myCustomValue, 3.14);
var fruits = ["Mango", "Apple", "Orange"]

		//js allows an array to contain any type of values:
var arr = [
	'string', 42.0, true, false, null, undefined, ['sub', 'array'], {object: true}, NaN
];

		//refer to elements of an Array using the element's index number
		//index of the elements starts with 0
var days = ["Sunday", "Monday", "Tuesday"];
colors[0] //Sunday
colors[1] //Monday

//This means that the length property will be one more than the highest index stored in the array:
var colors = [];
colors[30] = ['Green'];
console.log(colors.length); // 31

//When assigning the length property, writing a shorter value than the number of stored items truncates the array
var colors = ['Red', 'Blue', 'Yellow'];
console.log(colors.length); // 3
colors.length = 2;
console.log(colors); // ["Red","Blue"] - Yellow has been removed
//writing 0 empties it entirely
colors.length = 0;
console.log(colors); // [] the colors array is empty
colors.length = 3;
//If you query a non-existent array index, you get undefined .
console.log(colors); // [undefined, undefined, undefined]




	//1.2 iterate over the values of an array
		//for loop
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
		//forEach() loop
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
	console.log(color);
});
//Unassigned values are not iterated in a forEach() loop

	//1.3 Array methods
		//1.3.1 concat() - joins two arrays and returns a new array
var myArray = new Array("33", "44", "55");
myArray = myArray.concat("3", "2", "1");
console.log(myArray);// ["33", "44", "55", "3", "2", "1"]

		//1.3.2 join() - joins all the elements of an array into a string.
var myArray = new Array('Red','Blue','Yellow');
var list = myArray.join(" ~ ");
console.log(list);//"Red ~ Blue ~ Yellow"

		//1.3.3 pop() - removes the last element from an array and returns that element
var myArray = new Array("1", "2", "3");
var last = myArray.pop();// myArray = ["1", "2"], last = "3"

		//1.3.4 push() - 
		//adds one or more elements to the end of an array and returns the new length of the array
var myArray = new Array("1", "2");
myArray.push("3");// myArray = ["1", "2", "3"]

		//1.3.5 shift() - removes the first element from an array and returns that element
var myArray = new Array ("1", "2", "3");
var first = myArray.shift();// myArray = ["2", "3"], first = "1"

		//1.3.6 unshift() - 
		//adds one or more elements to the front of an array and returns the new length of the array
var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5");// myArray = ["4", "5", "1", "2", "3"]

		//1.3.7 reverse() - reverses the array—the first element becomes the last and the last becomes the first
var myArray = new Array ("1", "2", "3");
myArray.reverse(); // transposes the array so that myArray = [ "3", "2", "1" ]

		//1.3.8 sort() - sorts the elements of an array
var myArray = new Array("A", "C", "B");
myArray.sort(); // sorts the array so that myArray = [ "A","B","c" ]

		//1.3.9 indexOf(searchElement[, fromIndex])
		//This searches the array for searchElement and returns the index of the first match
var a = ['a', 'b', 'a', 'b', 'a','c','a'];
console.log(a.indexOf('b')); // 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // 3
console.log(a.indexOf('1')); // -1, 'q' is not found

	//1.3.10 lastIndexOf(searchElement[, fromIndex]) 
		//This works like indexOf() ,but only searches backwards:
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // 1
console.log(a.lastIndexOf('z')); // -1



//2. Maps
	//A map is a simple key-value map and can iterate its elements in the order of their insertion
var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
founders.size; // 2
founders.get("twitter"); // undefined
founders.has("yahoo"); // false
for (var [key, value] of founders) {
	console.log(key + " founded by " + value);
}
// "facebook founded by mark"
// "google founded by larry"


//3. Sets
	//Sets are collections of values and can be iterated in the order of the insertion of their elements. 
	//a value in set can occur only once.
var mySet = new Set();
mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");
mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2
for (let item of mySet) console.log(item);
// 1
// "Howdy"
