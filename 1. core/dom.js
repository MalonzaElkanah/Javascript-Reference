/*
	1. Accessing DOM elements
	2. Accessing specific nodes

*/



//1. Accessing DOM elements
	//window.onload function - executed when the browser loads the page.

	//document.documentElement function - access the entire HTML document.

	//documentElement helper properties

		//1. .body - accessing the <body> element
		//2. .childNodes array - traverse through the children of an element
		//3. .firstChild - accessing first child
		//4. .lastChild - accessing last child

	//parentNode
window.onload = function() {
	var doc = document.documentElement;
	var body = doc.body;
	var _head = doc.firstChild;
	var _body = doc.lastChild;
	var _head_ = doc.childNodes[0];
	var title = _head.firstChild;
	alert(_head.parentNode === doc); //true
}


//2. Accessing specific nodes
	//getElementsByTagName() - return NodeList of all the element objects whose tagName property is specified.
var paragraphs = document.getElementsByTagName('p');

	//getElementsByName() - retrieve all the elements that have their name attribute set to a specific value.
'<input type="radio" name="feeling" value="Happy" /> Happy<br />'
'<input type="radio" name="feeling" value="Sad" />Sad<br />'
var feelings = document.getElementsByName("feeling");
alert(feelings[0].getAttribute("value"));
alert(feelings[1].getAttribute("value"));

	//getElementById() - accessing a specific element. id attribute is unique for every element
'<p id="greeting">Hello World!</p>'
var greeting = document.getElementById("greeting");
alert(greeting.innerHTML); //shows "Hello World" alert


//3. Browser events
	//Browsers provide you with programmatic means to react when an event occurs called listeners.

	//3.1 addEventListener
//This function registers its second argument as a callback function.
//This callback is executed when the event specified in the first argument is triggered.
'<button id="Bigbutton" >Submit</button>'
'<p>No handler here.</p>'
'<script>'
	var button = document.getElementById("#Bigbutton");
	button.addEventListener("click", function() {
		console.log("Button clicked.");
	});
'</script>'



