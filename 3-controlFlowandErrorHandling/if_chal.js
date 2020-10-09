//! CHALLENGE
//! ************
//?    Bronze:
//!     Write an if else statement that checks your name;
//!     If it is your name, console log '<name>'
//!    If the name does not match, console.log 'Hello, what is your name?'
//?     Silver:
//!     If It is your name, console log 'Hello, my name is <name>'
//?     Gold:
//!     If it is not your name, console log 'Hello, is your name <name here> ?'

// let name = "Sean"

// if (name == "Sean") {
//     console.log("Hello, my name is Sean!");
// } else {
//     console.log (`Hello, is your name ${name}?`)
// }

//! CHALLENGE
//! ************
//!     Use this string: let name = 'zAchARy';
//?     Bronze:
//!     Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
//!     If it is not console.log 'hey, this isn't written correctly'
//?     Silver:
//!     If the first letter of a string is uppercase, only console.log that letter
//!     if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
//?     Gold:
//!     If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
//!     If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase

let name = "zAchARy";

//? Bronze
// console.log(name[0]);

// if (name[0] == name[0].toUpperCase()) {
//     console.log(name);
// } else {
//     console.log("Hey, this isn't written correctly");
// };

//? Silver
// if (name[0] == name[0].toUpperCase()) {
//     console.log(name[0]);
// } else {
//     console.log(name.slice(1).toLowerCase());
// };

//? Gold
if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log("console log #1:", isUppercase);
} else {
    console.log([name[0].toUpperCase()] + [name.slice(1).toLowerCase()]);
}


//? Dot notation
let student = {
    name: "Sean",
    grade: 12
};

let names = [
    "Sean",
    "Emily",
    "Charli"
]

//? Ways to acces an object
console.log(student.name);
