console.log('Hello world from External Script')

var firstName = 'Gokul';
console.log(firstName);

var lastName = "Gopi";
console.log(lastName);
// Note: Both Single & double quotes works for var. In js, recommended to use single quotes.


var age = 28;
var isMajor = true;
console.log(isMajor);
// Note: Semi-Colon in end of var looks like optional.
// Same like java, variable name should be camelcase for maintaing coding standard.

var job;
console.log(job);  // Output is undefined, not null. 

job = 'Software Engineer';
console.log(job);

/*
Like Java variable name follows the same rules for naming the variable.
		1. Varaible name cannot have special character except dollor($) and underscore(_)
		2. Name should not start with numbers.
		3. Name can start only with alphabers or dollor($) or underscore(_).
		4. variable name cannot have java script reserved keywords like (function,var,...) etc.
*/	

// var 3job = 'test';  // O/P: Uncaught SyntaxError: Invalid or unexpected token

// var function = "test2"; // O/P: Uncaught SyntaxError: Unexpected token 'function'

/**********************************
* Variable Mutation & Type Coercion
*/

/**********************************
* Type Coercion
*/

console.log('********* Variable Mutation & Type Coercion Demo *********');
var fName = 'Rahul';
var fNameAge = 20;
console.log(fName + ' '+ fNameAge);

/*
 Type Coercion : fNameAge is type of Number but JS is automatically converts into string and append with fName;
*/

var fNameJob, isMarried ; // Declaring multiple variable at once.
fNameJob = 'Doctor';
isMarried = false;
console.log(fName + ' age is '+ fNameAge + ' and his job is '+ fNameJob +'. Is he Married ? '+isMarried);

/**********************************
* Variable Mutation
*/


isMarried = 'Nope he is not married';
alert(fName + ' age is '+ fNameAge + ' and his job is '+ fNameJob +'. Is he Married ? '+isMarried);

/*
* 	Here boolean is married is changes to string  by just assigning a string type. This is called dynamic typing in JS.
*/

var lastName = prompt('Enter '+fName+ '\'s Last Name');
console.log('First Name is '+fName + ' and Last Name is '+lastName);








