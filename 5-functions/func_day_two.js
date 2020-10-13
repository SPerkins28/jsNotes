//* Make a function called greet
function greet() {
    console.log("Hello");
}
//* Say Hi

let sayHi = () => console.log("Hi"); //? Concise funciton

//* Hello

let hello = () => {                 //? Block funtion
    console.log("Hello!");
}

//* Greet_two
let greetTwo = function() {
    console.log("Greet again");
}

aList = ['Sean', 'Perkins']

function printList() {
    console.log(aList);
}
printList();

function betterPrint(listParam) {
    console.log(listParam);
}
betterPrint(aList)

//! CHALLENGE
//? Wite out how this works with 20
function varLoop(n) {
    for(let i = 1; i <= n; i ++) {
        console.log(i);
    }
}

//? function varLoop(20) {
//?     for(let i = 1; i <= 20; i++) {
//?         console.log(i);
//?     }
//? }
//?This will take (n), which is 20 in this case, and set it as i <= 20 in the for loop. This will then cause i to be counted from 1 - 20 by 1.
varLoop(20);

//* Make a function that takes in 3 things and prints them on separate lines
function multiPrint(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}
function listPrint(wordList) {
    // for (word in wordList) {
    //     console.log(wordList[word]);
    // }
    for (word of wordList){
        console.log(word);
    }
}
listPrint(['Justin', 'Adam', 'Amy', 'Joe'])

