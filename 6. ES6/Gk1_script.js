
/*******************
* let & const
*/

// ES5:

var nameEs5 = "Gokul G";
var age = 27;
nameEs5 = "Gokul Gopi";
console.log(nameEs5);

// Es6
const nameEs6 = "Rahul Gopi";
var rahulAge = 20;
// nameEs6 = "Rahul G";
console.log(nameEs6);


// ES5  
// var are function scope
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName); // only in var its possible. we can use the variable name before it declare.
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    // we are using firstname varaiable outside the block, but still its works. This is function scope.
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
// let & const are block scope.
function driversLicence6(passedTest) {
    
    //console.log(firstName); // in Let we can't use variable name before the decalration
    const yearOfBirth = 1990;
    
    if (passedTest) {
        let firstName;  
        firstName = 'John';
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
        
    }
    
    //  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

/* 
Notes:

	1. let & const are block scope, wheras var is a fucntion scope.
	2. once we assign the value to const we can't reassin any value.
	3. As 'let' scope are block chain, if we decalare a variable inside a block and access outside we will ger error. whereas, If we decalre outside the block and assign a value inside the block , it will work even if we use it outside.
	4. In "var" we can use before its declaration, whereas we can't use "let" before its declaration.
	5. This is called temporal-dead zone in let.
	
let is most recommended way to use.
*/

/*****************
 * var vs let
 */

// Using var.
var varVariable = 23;

for (var varVariable = 0; varVariable < 5; varVariable++) {
    console.log(varVariable);
}

console.log("Final value of var is: "+ varVariable);  // value will be 5

// Using let 
let letVariable = 23;

for (let letVariable = 0; letVariable < 5; letVariable++) {
    console.log(letVariable);
}

console.log("Final value of var is: "+ letVariable);  // value will be 5


/////////////////////////////////
// Lecture: Blocks and IIFEs



// ES5. To achieve data privacy we need to create IIFE in ES5
(function() {
    var cEs5 = 3;
})();

//console.log(cEs5);

// ES6. By creating a simple block we can acheive data privacy
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);