
/***************************
*	Math Operator ( + , - , *, / )
*/

var currentYear, gokulAge, rahulAge;

// var is an optional, if we decalre var and directly assigned the value, JS is capable enough to understand & process it.

currentYear = 2020;
gokulAge = 27;
rahulAge = 22;

console.log("Gokul Birth Year: " + (currentYear - gokulAge));
console.log("Rahul Birth Year: " + (currentYear - rahulAge));

withoutVar = 'Creating a variable without declaration.';
console.log(withoutVar);

/***************************
*	Logical Operator 
*/

var majorAgeLimit = 18 ;

var isMajor = gokulAge > majorAgeLimit;
console.log('Is major: '+ isMajor)


/***************************
*	typeof Operator 
*/

console.log(typeof majorAgeLimit);
console.log(typeof isMajor);
console.log(typeof withoutVar);

var testWOdeclariion;
console.log(typeof testWOdeclariion);


/***************************
*	Operator Precedence;
*/

var gokulBirthYear = 1993;
var isFullAge =  currentYear - gokulBirthYear >= majorAgeLimit;
console.log('isFullAge: '+ isFullAge);

/* Link to know more about Operator Precendnce 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Note: 

Assignment Operatos associativity from right to left.
Math Operators associativity from left to right.

This details also present in above link/

*/


/***************************
*	Coding Exercise 1: BMI Calculator
*/
console.log('Coding Exercise 1:');

var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, isMarkHasHigherBmiThanJohn;

markMass = 101 ;
markHeight = 1.6;

johnMass = 90;
johnHeight = 1.4;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

isMarkHasHigherBmiThanJohn = markBMI > johnBMI ;

console.log('Is Mark\'s BMI higher than John\'s ? '+ isMarkHasHigherBmiThanJohn);


/***************************
*	Conditional Operators.
*/


console.log('********** if else *************');

var myName = 'Gokul';
var relationShipStatus = 'MorattuSingle';

if (relationShipStatus === 'MorattuSingle'){
	console.log(myName + ' is Morattu Single');
}else{
	console.log(myName + ' life is gone !!! ');
}

if(markBMI > johnBMI){
	console.log('Mark has higher BMI than John.')
}

// Note: There is difference between '==' & '===' . Need to know


/***************************
*	Ternary Operator & Switch statement.
*/


// Both Ternary and Switch statement is similar to Java ternary & switch statement.


/***************************
*	Difference Between '==' & '===' in JS
*/


var numberTocheck = 20;

// Double Equals: Data Type comparision wont happen only value will happen.
numberTocheck == '20' ? console.log(' Double Equals: Type Coercion has happened') :  console.log(' Double Equals: No Type Coercion has happened');



// Triple Equale Otherwise called as Strict Comparision.
numberTocheck === '20' ? console.log(' Triple Equals: Type Coercion has happened') :  console.log(' Triple Equals: No Type Coercion has happened');



/***************************
*	Coding Challenge 2:
*/

console.log('********** Coding Challenge 2 *************');

var john, mike;

var johnGame1,johnGame2,johnGame3;
var mikeGame1,mikeGame2,mikeGame3;

johnGame1=89;johnGame2=120;johnGame3=103;
mikeGame1=116;
mikeGame2=94;
mikeGame3=123;



var avgScoreForJohnTeam = (johnGame1 + johnGame2 + johnGame3) / 3 ;
var avgScoreForMikeTeam = (mikeGame1 + mikeGame2 + mikeGame3) / 3 ;

console.log('avgScoreForJohnTeam: '+avgScoreForJohnTeam);
console.log('avgScoreForMikeTeam: '+avgScoreForMikeTeam);

if ( avgScoreForMikeTeam > avgScoreForJohnTeam){
	console.log('Mike Team wins with the Average Score of '+ avgScoreForMikeTeam);
} else if (avgScoreForJohnTeam > avgScoreForMikeTeam){
	console.log('John Team wins with the Average Score of '+ avgScoreForJohnTeam);
} else{
	console.log('Both Mike and John Teams score are draw.')
}


var mary;

var maryGame1,maryGame2,maryGame3;

maryGame1=97;maryGame2=134;maryGame3=105;


var avgScoreForMaryTeam = (maryGame1 + maryGame2 + maryGame3 ) / 3;

console.log('avgScoreForMaryTeam: '+avgScoreForMaryTeam);

if ( (avgScoreForMikeTeam > avgScoreForJohnTeam) &&  avgScoreForMikeTeam > avgScoreForMaryTeam ){
	console.log('Mike Team wins with the Average Score of '+ avgScoreForMikeTeam);
} else if ((avgScoreForJohnTeam > avgScoreForMikeTeam) && avgScoreForJohnTeam > avgScoreForMaryTeam){
	console.log('John Team wins with the Average Score of '+ avgScoreForJohnTeam);
} else if (avgScoreForMaryTeam > avgScoreForMikeTeam && avgScoreForMaryTeam > avgScoreForJohnTeam){
		console.log('Mary Team wins with the Average Score of '+ avgScoreForMaryTeam);
} else {
	console.log('All Mike, John & Mary Teams scores are draw.')
}	




