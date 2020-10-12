//* DECLARATIONS
function hi(){
    console.log('HI')
}

hi(); //! <-- Calling the function


//* EXPRESSIONS
let hello = function hey() { //! <-- seting a variable to a funciton
    console.log('Hey!')
}

hello(); //! <-- Calling the funciton with the variable.

//* FUNCTION EXAMPLES
function addIt() {
    console.log(5 + 10);
};

addIt();

function counting() {
    for (i = 1; i <= 10; i++){ //! <-- For Loop inside a function
        console.log(i);
    }
}

counting();

//! CHALLENGE
//? - Given the array, create a function that lists out the values individually.
let arr = ['This', 'is', 'really', 'cool'];

function separate() {
    for(item of arr) {
        console.log(item);
    }
}
separate();
