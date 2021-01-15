console.log("Arrow Functions")

/*******************
* Arrow Functions
*/

var ages = [1990,1993,1994,1995];
console.log(ages);

// ES5 way 

var ageAsOfNowES5 = ages.map(function(value){
    return 2020 - value;
});
console.log("ageAsOfNowES5: "+ ageAsOfNowES5);

// ES6 way
var ageAsOfNowES6 = ages.map(el => 2020 - el);
console.log(`ageAsOfNowES6: ${ageAsOfNowES6}`);
console.log(ageAsOfNowES6);

let ages6 = ages.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = ages.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);


/****************************
* Arrow Functions Advanced:
*/

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;  // this is hack in js to access the object inside the normal fn.

        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();

 // Es6 way
 const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        // Arrow function share this keyword with its surrounding. in here this keyword refer to box6 object.
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
 box6.clickMe();

 // ******

 var Person = function(name) {
    this.name = name;
}

/*
// OTher way to defince the object.
 function Person(name) {
    this.name = name;
}
*/

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
console.log("ES 6 Way")
Person.prototype.myFriends6 = function(friends) {
    
    var resultArr = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(resultArr);
}

new Person('John').myFriends6(friends);

new Person('Mike').myFriends6(friends);