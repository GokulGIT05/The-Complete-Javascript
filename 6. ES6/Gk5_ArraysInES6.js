/********************** 
* Lecture: Arrays
*/

console.log("Arrays in ES6");

const boxes = document.querySelectorAll('.box');

/*
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
// Background color of boxes is changes to blue;
*/ 

// ES 6
  var arrayInEs6 = Array.from(boxes);
  arrayInEs6.forEach((eachEl) => eachEl.style.backgroundColor = "green");
// In a single line we have achieved the output.


// Note: We can't use break or continue statement inside forEach Loop. so "for of" loop is introduced in ES6.

/********************** 
* Lecture: for of
*/
for (const cur of arrayInEs6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

/********************** 
* Lecture: findIndex
*/
//ES5
var ages = [12, 17, 8, 21, 14, 11]; 

var full = ages.map(function(cur) { // if multiple true, then it will return the first index
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex(cur => cur >= 18)); // Will return index of element.
console.log(ages.find(cur => cur >= 18)); // will return the element.
