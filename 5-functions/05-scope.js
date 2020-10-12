let x = 12; //! globabl scope

function scope() {
    let x = 33; //! local scope - will be read over the globabl variable above
    console.log(x);
}

scope(); //! calls function where x is declared as 33 = 33
console.log(x); //! console logs the first iteration of x as it is outside of the function = 12


let y = 12;
function scope() {
    y = 33;
    console.log(y);
}

scope();
console.log(y); //! console logs the first which is changed with the console log inside the function = 33

//* VAR vs LET
//? var is scoped to nearest function block
//? let is scoped to neareset enclosing block

var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x); //! = 45 because x is set to 45 within the if statement
    }
    console.log(x); //! = 45 because has been changed to 45 in the if statement before this console log
}

varTest();
console.log(x); //! = 12 because it is pulling from the first declaration of let it sees

let x = 12;
function letTest() { //! function block
    var x = 33;
    if (1 == 1) { //! enclosing block || if statement is the enclosing block keeping x = 45
        let x = 45;
        console.log(x);
    } //! enclosing block
    console.log(x);
} //! function block

letTest();
console.log(x);