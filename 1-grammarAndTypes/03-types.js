//* BOOLEANS (true/false)
let on = true;
console.log(on);

let off = false;
console.log(off);

//* NULL
let empty =  null;
console.log(empty);

//* UNDEFINED (should not really use this)
let undef = undefined;
console.log(undef);

let x;
console.log(x);

//* NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);


//* STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'I\'m home'; //* need a backslash to state you need an apostrophe if you are using single quotes!!
let stringFour = `I'm home`;
let stringFive = `You can use ${stringOne} or ${stringTwo}!` //* String interpolation! Have to use back ticks for this string to work!!

console.log(stringFive);

let first = 1050 + 100;
let second = '1050' + '100'

console.log(first);
console.log(second);

console.log(typeof first); //* typeof is an operator that is a good way to check you have been using
console.log(typeof second);


let animal = 'dog';

console.log('I have a ' + animal); //* Concatination!
console.log(`I have a ${animal}`); //* String Interpolation!

//* OBJECTS

let frodo = {           //* Curly braces store the object information
    race: 'hobbit',     //* Key/Value Pair
    rings: 1,
    isShort: true,
}

console.log(frodo);
console.log(typeof frodo);

//* ARRAYS

//*            (0)   (1)  (2)
let tacos = ['Large', 4, true];
//*       (string) (num) (boolean)
console.log(tacos);
console.log(typeof tacos); //* this is an object as it stores multiple data types


//* Mini Challenge 1

let firstName = "Sean";
let lastName = "Perkins";
let houseNumber = Number("2302");
let street = "Hawthorn";
let street2 = "Place";
let city = "Noblesville";
let state = "Indiana";
let zipCode = Number ('46062');
console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${street2}, ${city}, ${state} ${zipCode}`);

//* STRING PROPERTIES AND METHODS
let myName = 'Sean';
console.log(myName.length);

console.log(myName.toUpperCase());

let home = 'My home is Noblesville';
console.log(home.includes('Noblesville'));
console.log(home.includes('noblesville')); //* Returns false becaues JS is case sensitive!!

//* Mini Challenge 2

let sent = 'This sentence will be split into individual parts';
let array = sent.split(' '); //* Split method. Can be split by many different things.
console.log(array);
console.log(sent.split(' '));



