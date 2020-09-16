/********************** 
* Spread Operators
*/

console.log("Spread Operators");

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);  //  its like var arg in java
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller]; // we can simpley create bigArray by joining two arrays.
console.log(bigFamily);


const h = document.querySelector('h1');  // return node.
const boxes = document.querySelectorAll('.box'); // returns node list
const all = [h, ...boxes]; // converting node & node List to single list node

// converting node list to array and loops through to change the color.
Array.from(all).forEach(cur => cur.style.color = 'purple');