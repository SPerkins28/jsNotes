function hi(name) { //! <--- Parameter is what is inside the ()
    console.log(`Hi ${name}`);
}

hi('Sean');
hi('Justin');
hi('Keegan');

function addIt(x, y) {
    console.log(x + y);
}

addIt(2, 9);
addIt(8, 15);
addIt(7, 4);

//! CHALLENGE
//? - Write a function that takes two parameters:
//? - one parameter is for a first name,
//? - the other parameter is for a last name;
//? - have them come together in a variable inside the function.
//? - console.log 'Hello, my name is <your name>'
//? - call (or invoke) your function

function wholeName(firstName, lastName) {
    let name = console.log(`Hello, my name is ${firstName} ${lastName}`);
    return name;
}

wholeName("Sean", "Perkins");

function countIt(i) {
    console.log(i);
}

for(let i = 0; i <= 10; i ++) {
    countIt(i);
    
    if (i % 2 === 0){
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}
