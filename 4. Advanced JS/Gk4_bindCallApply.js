/*********************************
* Lecture: Bind, call and apply
*/


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

var emily01 = {
    name: 'Emily 01',
    age: 37,
    job: 'Engineer'
};

john.presentation('formal', 'morning');

// Method Borrowing 
// 1. using call() method
john.presentation.call(emily,'friendly', 'evening');
 // First parameter should be this or object need to pass in call method.

// 2. apply Method. 
// This is also very similar to call, only difference is apply will use array parameters.
john.presentation.apply(emily01,['friendly', 'evening']);


// 3. bind is used to call with prerequiste values. Doesn't immediately call the function insteadn it will create a copy of the function.

var johnFormal = john.presentation.bind(john,"formal");
johnFormal("Day!!!");  // This is called carrying.
// We set friendly as a pre-requiste param for john object using bind method.
johnFormal("Morning !!!!");


var emilyFriendly = john.presentation.bind(emily,"friendly");
emilyFriendly("Evening $$$");


// Example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);




