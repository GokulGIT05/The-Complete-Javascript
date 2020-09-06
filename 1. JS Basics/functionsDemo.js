/***************************
*	functions in JS
*/

// Funtion are like methods in Java. 

// Function Declaration.
function calculateAge(birthYear){
	now = 2020;
	return now - birthYear;
}


var ageGokul = calculateAge(1993);
var ageRahul = calculateAge(1998);
var ageGeetha = calculateAge(1996);
console.log('The age of the persons is: '+ ageGokul,ageRahul,ageGeetha);

// Function Expression:
var ageCalculator = function(birthYear){
	now = 2020;
	return now - birthYear;
}


ageGopi = ageCalculator(1970);
ageMala = ageCalculator(1969);
console.log(ageGopi,ageMala);
