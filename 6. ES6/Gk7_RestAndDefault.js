/********************** 
* Rest Parameter
*/
console.log("Rest Parameter");


//ES5
function isFullAge5() {
    //console.log(arguments); // arguments is a special variable
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}
// isFullAge6(1990, 1999, 1965, 2016, 1987);

// *********

// Passing ageLimt as a arguemnts.

//ES5
function isFullAgeLimit5(limitAge) {
    console.log(limitAge);
    //console.log(arguments); // arguments is a special variable
    var argsArr = Array.prototype.slice.call(arguments,1);
    
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limitAge);
    })
}
// isFullAgeLimit5(18, 2010, 1965);

// ES6
// we acive this functionaliyt by simplet adding ageLimit infront of valueArr
function isFullAgeLimit6(ageLimit, ...valueArr){
    valueArr.forEach(cur => console.log((2020 - cur) >= ageLimit));
}
// isFullAgeLimit6(21,2005,1980);

/********************** 
* Default Parameter
*/
console.log("Default Parameter");

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);

//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);



