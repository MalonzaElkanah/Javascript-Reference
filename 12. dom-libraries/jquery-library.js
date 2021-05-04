/*
name		:   jquery

source		: 	https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js

description	: 	jQuery is a lightweight library designed to make common browser operations easier.
				Common operations such as DOM traversal and manipulation, event handling, animation, 
				and Ajax can be tedious if done using pure JavaScript. jQuery provides you with easy-to-use 
				and shorter helper mechanisms to help you develop these common operations very easily and quickly.


context		: 	1. Adding JQuery

				2. $ function

*/



//1. Adding JQuery

	//Adding jQuery to your HTML by adding the script directly from a content delivery network (CDN) 
'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>'
	//Adding by manually downloading the file and adding it to the script tag.
'<script src="./lib/jquery.js"></script>'



//2. $ function. 

	//It is an alias for the function called jQuery.
window.jQuery = window.$ = jQuery;
	//you can use both $ and jQuery interchangeably.
$('#greeting').html('Hello World Martian');
jQuery('#greeting').html('Hello World Martian');

	//$(document).ready() - This function will be executed once the document is ready.
$(document).ready(function() {
	$('#greeting').html('Hello World Martian');
});
	//it has its own shortcut. You can replace the entire ready() call with a short $()
$(function() {
	$('#greeting').html('Hello World Martian');
});

	//$() accepts CSS selector as a parameter and returns a new jQuery object pointing to the elements on the page

		//Tag
$('p')//select all p tags in the document

		//Id - symbol used to id the id match "#"
$('#div_1')//select single elements that have a div_1 ID

		//Class - symbol used to id the class match "."
$('.bold_fonts')//selects all the elements in the document that have the CSS class bold_fonts


	// $.html() function sets the HTML for the target element
$('h1').html(function(index, oldHTML){//accesses all H1 headers and appends the text Finally? to them:
	return oldHTML + "Finally?";
});

	//$.addClass - apply a specific CSS style class
$('h1').addClass('highlight-blue');
$('ul li:not(.highlight-blue)').addClass('highlight-green');
$('tr:nth-child(odd)').addClass('zebra');

	//$.css() - apply a custom CSS
	$('#header > h1 ').css('background-color', 'cyan');
	//Find each header ( h1 ) that is a child ( > ) of the element with an ID of header ( #header ).


	//implicit iteration
$( 'li' ).each(function( index, element ) {
if(index % 2 == 0)
	$(elem).prepend( '<b>' + STATUS + '</b>' );
});


//Chaining jQuery methods
	//call a series of methods on a selection without temporarily storing the intermediate values
$( '#button_submit' )
	.click(function() {
		$( this ).addClass( 'submit_clicked' );
	})
	.find( '#notification' )
	.attr( 'title', 'Message Sent' ); //we are chaining click() , find() , and attr() methods

//Traversal and manipulation

	//filter();
		// - filter an existing selection to include only elements that match a certain criterion
var list = $( 'li' ); //select all list elements
var highlighted = list.filter( '.highlight');// filter items that has a class 'highlight' associated
var not_highlighted = list.not( '.highlight');// filter items that doesn't have class 'highlight' associated

	//addClass, removeClass,  toggleClass()
		//add and remove classes to elements
$( '#usename' ).addClass( 'hidden' );
$( '#usename' ).removeClass( 'hidden' );
$( '#usename' ).toggleClass( 'hidden' );

	//val()
		//alter the form of element values
$( 'input[type="text"]' ).val( 'Enter usename:' );

	//attr()
		//modify element attributes
$('a').attr( 'title', 'Click' );

	
//browser events		

	/*  helper methods for browser event
		blur
		change
		click
		dblclick
		error
		focus
		keydown
		keypress
		keyup
		load
		mousedown
		mousemove
		mouseout
		mouseover
		mouseup
		resize
		scroll
		select
		submit
		unload  
	*/

$('button').click(function(event) {
	console.log('Mouse button clicked');
});


	//.on() method
$('button').on( 'click', function( event ) {
	console.log(' Mouse button clicked');
});
		//allows you to bind a handler to multiple events. 
$('#inputBoxUserName').on('focus blur', function() {
	console.log(' Handling Focus or blur event' );
});

		//You can add multiple event handlers for multiple events as follows:
$( "#heading" ).on({
	mouseenter: function() {
		console.log( "mouse entered on heading" );
	},
	mouseleave: function() {
		console.log( "mouse left heading" );
	},
	click: function() {
		console.log( "clicked on heading" );
	}
});

		//Allows you to work on custom events as well.
$('button').trigger( 'click' );
$('button').click();
		//You can add more than one handler to an element:
$("#element")
.on("click", firstHandler)
.on("click", secondHandler);

$("#element").off("click",firstHandler)//remove one of the handlers


	//.off() method
		//will remove any event handlers that were bound to the specified event
$('button').off( 'click' );


	//The event object
function handlesClicks(event){
	//Handle click event
}
$("#bigButton").on('click', handlesClicks);

$( "#loginform" ).on( "submit", function( event ) {
	event.preventDefault();// Prevent the form's default submission.
	event.stopPropagation();// Prevent event from bubbling up DOM tree, also stops any delegation
});

$( "a" ).click(function( event ) {
	var anchor = $( this );
	if ( anchor.attr( "href" ).match( "google" ) ) {
		event.preventDefault();
	}
});

