
console.log("Advanced JS")

/***************************
* Function Constructors:
*  This is a blue print to create an object. Most comman way also.
*  For Function Contructors/prototype we have to follow camelcase.
*/

/* New Operator:
"this" operator is not pointing to global object when we are using new.
*/


// Normal way to create an object in jS
var gokul = {
    age: 26,
    yearOfBirth : 1993,
    job: "Software Developer"
};

console.log(gokul);
console.log("*****************************************");

// Using Function Constructors

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    /*
    // Pushing below code as a prototyp.
    this.calulateAge = function(){
        console.log("Age of the Person is: "+ (2020 - this.yearOfBirth));
    }
    */
};

Person.prototype.calulateAge = function(){
    console.log("Age of the Person is: "+ (2020 - this.yearOfBirth));
}

Person.prototype.gender = "MALE";

/*
// ES2016 Version
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
*/

// Creating a object by using new operator.
var rahul = new Person("Rahul",1998,"Doctor");
console.log(rahul);
rahul.calulateAge();

var diwaker = new Person("Diwaker",1992,"Engineer");
console.log(diwaker);
diwaker.calulateAge();

console.log(rahul.gender);
console.log(diwaker.gender);

// --------------------------------------

/**********************************
* Second way to create a object:
* Object.create()
*/

console.log("************ Object.create() ***************")

var personPrototype = {
    
    calculateAge: function(){
        console.log(2020 - this.birthYear);
    }
    
}

console.log(personPrototype);
// One way of using Object.create()
var gokulG01 = Object.create(personPrototype);
console.log(gokulG01);
gokulG01.name = "Gokul G01";
gokulG01.birthYear = 1993;
console.log(gokulG01);
gokulG01.calculateAge();


// Other way of using Object.create().
var gokulG02 = Object.create(personPrototype, {
    name: {value: "Gokul G02"},
    birthYear: {value: 1992}
});
console.log(gokulG02);
gokulG02.calculateAge(); 




