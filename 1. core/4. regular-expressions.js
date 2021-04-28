/* 	
	1. Introductions
		1.1. regular expression literal
		1.2. constructing an instance of a RegExp object
		1.3 Flags

	2. RegEx Methods
		2.1 test()
		2.2 exec()
		2.3 match()
		2.4 replace()
		2.5 split() 

	3. Match from a class of characters
		3.1 Set of Characters []
		3.2 Match anything but the pattern ^
		3.3 sequential range of characters or numbers [-]
		3.4 literal character \
		3.5 character groups shortcut notations

	4. Repeated occurrences
		4.1 Repetition quantifiers
		4.2 Group character ()
		4.3 Word Boundaries \b
		4.4 Alternatives – OR |
		4.5 Beginning and end
		4.6 Backreferences
		4.7 Greedy and lazy quantifiers
*/



//1 Introduction

	// Created in two ways:

		//1.1. regular expression literal 
			//This are delimited using forward slashes
var pattern = /test/;

		//1.2. constructing an instance of a RegExp object.
			//construct a RegExp instance, passing the RegEx as a string
var pattern = new RegExp("test");

		//1.3 Flags
	// there are three flags that can be associated with an expression
		//i : makes RegEx case-insensitive, /test/i matches  test , Test , TEST , tEsT , ...
		//g : matches all the instances of the pattern (default: matches the first occurrence only)
		//m : matches across multiple lines that might be obtained from the value of a textarea 
pattern = /test/ig; //literal
pattern = new RegExp("test", "ig"); // RegExp object



//2 RegEx Methods

	//2.1 test() method that returns true or false based on the pattern matched.
var pattern = /orange/;
console.log(pattern.test("orange")); // true

var patternIgnoreCase = /orange/i;
console.log(patternIgnoreCase.test("Orange")); // true

var patternGlobal = /orange/ig;
console.log(patternGlobal.test("Orange Juice")); // true

	//2.2 exec() method to access occurrences of a particular pattern.
		//takes a string as an argument and returns an array containing all matches.
var strToMatch = 'A Toyota! Race fast, safe car! A Toyota!';
var regExAt = /Toy/g; //Match all occurence
var arrMatches = regExAt.exec(strToMatch);
console.log(arrMatches);
		//exec returns an object with information about the match. 
		//The object has index property that tells us where the successful match begins in the string.

	//2.3 match() method almost similar to exec() method
var strToMatch = 'A Toyota! Race fast, safe car! A Toyota!';
var regExAt = /Toy/;
var arrMatches = strToMatch.match(regExAt);
console.log(arrMatches);

	//2.4 replace() method replaces all the occurrences of a substring with a different string
var strToMatch = 'Blue is your favorite color ?';
var regExAt = /Blue/;
console.log(strToMatch.replace(regExAt, "Red")); //Output- "Red is your favorite color ?"

	//2.5 split() method returns an array with all the substrings generated after splitting the original string
var sColor = 'sun,moon,stars';
var reComma = /\,/;
console.log(sColor.split(reComma));//Output - ["sun", "moon", "stars"]



//3 Match from a class of characters
	//3.1 To match against a set of characters, place the set inside []. [abc] matches any character a , b , c 
var pattern = /[abc]/;
console.log(pattern.test('a')); //true
console.log(pattern.test('d')); //false

	//3.2 match anything but the pattern by adding a ^ (caret sign) at the beginning of the pattern.
var pattern = /[^abc]/;
console.log(pattern.test('a')); //false
console.log(pattern.test('d')); //true

	//3.3 match against a sequential range of characters or numbers, we can use the following pattern.
var pattern = /[0-5]/;
console.log(pattern.test(3)); //true
console.log(pattern.test(12345)); //true
console.log(pattern.test(9)); //false
console.log(pattern.test(6789)); //false
console.log(/[0123456789]/.test("This is year 2015")); //true

	//3.4 matching literal character [ or $ or ^ or / use backslash(\) character to escapes them
var pattern = /\[/; //literal match to the [
pattern = /\\/; //literal match to the \ 
pattern = /\//; //literal match to the /

	//3.5 character groups shortcut notations
/*
	\d 	- Any digit character
	\w 	- An alphanumeric character (word character)
	\s 	- Any whitespace character (space, tab, newline, and similar)
	\D 	- A character that is not a digit
	\W 	- A non-alphanumeric character
	\S 	- A non-whitespace character
	. 	- Any character except for newline
*/
var strToMatch = '123-456-7890';
var re = /\d\d\d-\d\d\d/;
var arrMatches = strToMatch.match(re);
console.log(arrMatches);//["123-456"]



//4. Repeated occurrences
	
	//4.1 repetition quantifiers
/*
	? 	: Either 0 or 1 occurrence (marks the occurrence as optional)
	* 	: 0 or more occurrences
	+ 	: 1 or more occurrences
	{n} : Exactly n occurrences
	{n,m} : Occurrences between n and m
	{n,} : At least an n occurrence
	{,n} : 0 to n occurrences
*/
var str = /behaviou?r/;
console.log(str.test("behaviour"));// true
console.log(str.test("behavior"));// true

console.log(/'\d+'/.test("'123'")); // true


	//4.2 group character expressions using ()
var heartyLaugh = /Ha+(Ha+)+/i;
console.log(heartyLaugh.test("HaHaHaHaHaHaHaaaaaaaaaaa")); //true
//breakdown
/*
H : literal character match
a+ : 1 or more occurrences of character a
( : start of the expression group
H : literal character match
a+ : 1 or more occurrences of character a
) : end of expression group
+ : 1 or more occurrences of expression group ( Ha+ )
*/

	//4.3 word Boundaries Matching using the \b pattern.
/*matches the position where one side is a word character(letter, digit, or underscore) 
and the other side is not.*/
console.log(/\bcat/.test('a black cat')); //true
console.log(/\bcat/.test('tomcat')); //false
console.log(/cat\b/.test('tomcat')); //true
console.log(/\bcat\b/.test('a black cat')); //true
console.log(/\bcat\b/.test("concatenate")); //false


	//4.4 Alternatives – OR |
		//Alternatives can be expressed using the | (pipe) character
var pattern = /a|b/; //matches either the a or b character
var pattern = /(ab)+|(cd)+/; //matches one or more occurrences of either ab or cd.


	//4.5 Beginning and end
		/*caret(^), when used as the first character of the RegEx, 
		matches if the substring appears at the beginning  of the string being matched. */
var pattern = /^test/
		//Similarly, the dollar sign ( $ ) signifies that the pattern must appear atthe end of the string.
var pattern = /test$/;
		//Using both ^ and $ indicates that the specified pattern must encompass the entire candidate string.
var pattern = /^test$/;


	//4.6 Backreferences
		/* the portions of a string that are successfully matched against terms in the regular expression 
		and numbered by the order in which opening parenthesis characters are encountered going 
		from left to right*/

		/*notation for a backreference is a backslash followed by the number of the capture to be referenced, 
		beginning with 1, such as \1 , \2 , and so on.
		*/
var pattern = /^([XYZ])a\1/ //matches string that starts with any of the X , Y , or Z characters 
//followed by an a and followed by whatever character matched the first capture

//used with String's replace() method using the special character sequences, $1 , $2 , and so on
var orig = "1234 5678";
var re = /(\d{4}) (\d{4})/;
var modifiedStr = orig.replace(re, "$2 $1");
console.log(modifiedStr); //outputs "5678 1234"


	// 4.7 Greedy and lazy quantifiers
		//greedy quantifier starts looking at the entire string for a match.(All of Above)
var string = '123';
var pattern = /\d+/; //matches 1 , 12 , and 123

var string = 'hello'
var pattern = /h.+l/; //matches hell
		//lazy quantifier matches as few of the quantified tokens as possible. 
		//You can add a question mark ( ? ) to the regular expression to make it lazy.
var string = 'hello'
var pattern = /h.?l/; //matches hel

		//Greedy and lazy quantifiers makes a big differnce when using replace() method
	