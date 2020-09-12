/////////////////////////////////////
// Lecture: The this keyword
 

// console.log(this);

// calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);  // this keyword still point t to global object.
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            // Regular function call happens then the default object is window object.
            console.log(this);
        }
        innerFunction(); 
    }
}
// john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Below is called method borrowing. Common concept in JS.
mike.calculateAge = john.calculateAge;
mike.calculateAge(); // now this keyword is act as mike object.