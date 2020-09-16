/********************** 
* Classes in JS
*/

console.log("Classes");

//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'swimmer');
console.log(john5);

// Inheritance
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); // call method to connect the classes
    this.olymicGames = olymicGames;
    this.medals = medals;
}

// We are achieving inheritance by following. Assinging  Person5 prototype to Athelete5 prototype
 Athlete5.prototype = Object.create(Person5.prototype);

// This wonMedal function is specific to Athelete5 object not for Person5 objects
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal(); 

// ES 6 Classes: Same like Java Classes. Syntatic Sugar. More Readable
class Person6{
    constructor(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

    calculateAge(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age); 
    }

    // Static Method
    static greeting(){
        console.log("Welcome to Class Demo");
    }
}
var john6 = new Person6('John', 1990, 'swimmer');
Person6.greeting(); // we are using Person6 class directly


 // ES 6 - Inhertinace
 class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge()