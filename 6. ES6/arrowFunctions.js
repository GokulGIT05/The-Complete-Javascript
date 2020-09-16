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


