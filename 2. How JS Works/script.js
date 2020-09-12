/////////////////////////////////////
// Lecture: Hoisting


// functions
// This is Hoising. We are calling the method, 
// before declaring itself
calculateAge(1965); // This is stored in variable object inside the execution context.

// Below is called function Declaration.
function calculateAge(year) {
    console.log('Function Declaration ' + (2016 - year));
}

// retirement(1956); 
// This is called function Expression
var retirement = function(year) {
    console.log('Function Expression ' + (65 - (2016 - year)));
}
retirement(1956)

/*
Note for Hoisting::
    Hosting will work only for Function Declaration
    Function Expression it won't work.
*/

// *************************************************
 
// Hoisting variables

console.log('Hoisting Variables: '+ age);
var age = 23;

function foo() {
    console.log('Inside Function Before Variable Declaration: ' + age);
    var age = 65; // if i comment here, then age will be 23. 
    console.log('Inside Function After Variable Declaration: ' + age);
}
foo();
console.log(age);
// *************************************************

/////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log('Lexical Scoping: ' + a + b + c); 
    }
}


// *************************************************
/*
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(b);
    // console.log(c);
    console.log('Diff b/w execution vs scope: ' + a+d);
}

*/



