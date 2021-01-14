
/***************************** 
* Objects & Properties
*/

// In have we use 'Semi-colon ( ; )' to terminate the line but in Javascript its commo(,) for objects.

// Object Literal
var gokul = {
	firstName : 'Gokul',
	lastName : 'Gopi',
	isMarried : false,
	technology : ['Java','Spring','Hibernate','Webservices']
};
// We terminate the by semi-colon.

console.log(gokul);
console.log(gokul.technology);

var field = 'lastName';
console.log(gokul[field]);

// There is one more way to create a object in JS
// By using new Object syntax:
var rahul = new Object();
rahul.firstName = 'rahul';
rahul.lastName = 'Gopi';
rahul.age = 21;
console.log(rahul);


/***************************** 
* Objects & Methods
*/

var gokul01 = {
	firstName : 'Gokul01',
	lastName : 'Gopi',
	birthYear : 1993,
 	isMarried : false,
	technology : ['Java','Spring','Hibernate','Webservices'],
	dateOfBirth : function (){
		return this.age = 2020 - this.birthYear;
	}
};

console.log(gokul01);
gokul01.dateOfBirth();
console.log(gokul01);

/* 
Note:
	Not like java, funtions will execute before console.log(). so both line 47 & 49, we be having value of age.

*/


/***************************** 
* Exercise 4:
*/

var mark = {

	fullName: 'Mark',
	mass :  101,
	height : 1.6,
	BMI : function () {
		return this.bmiValue = this.mass / (this.height * this.height);
		}

};

var john = {
	fullName: 'John',
	mass :  101,
	height : 1.4,
	BMI : function () {
		return this.bmiValue = this.mass / (this.height * this.height);
		}
};

console.log(mark,john);

mark.BMI();
john.BMI();

if(mark.bmiValue > john.bmiValue){
	console.log('Mark has higher BMI value');
} else if ( john.bmiValue > mark.bmiValue) {
	console.log('John has higher BMI value');
} else {
	console.log('Both Makr & John has Same BMI value');
}














