/***************************
*	functions in JS
*/

// Funtion are like methods in Java. 

// Function Declaration.
function calculateAge(birthYear){
	now = 2021;
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


/***************************
*	Arrays in JS
*/

// Exercise:

var johnHotelBill = [124,48, 268];
console.log('johnHotelBill: ' + johnHotelBill);


var tipCalculator = function(totalBill){

	var tipFortheBill;

		if(totalBill < 50){
			tipFortheBill =  0.20 * totalBill ;
		} else if (totalBill >= 50 && totalBill <= 200){
			tipFortheBill = 0.15 * totalBill;
		} else {
			tipFortheBill = 0.10 * totalBill;
		}
		return tipFortheBill;
}

console.log('Tip for First Bill: ' + tipCalculator(johnHotelBill[0]));
console.log('Tip for Second Bill: ' + tipCalculator(johnHotelBill[1]));
console.log('Tip for Third Bill: ' + tipCalculator(johnHotelBill[2]));

/*
Note: 
	1. Here first function() has to declare then only we can use this, otherwise we will get error. 

*/

