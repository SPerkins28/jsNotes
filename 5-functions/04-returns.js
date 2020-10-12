let name = fName => {
    return 'Finn'
}

let myName = name();
console.log(myName);

function capitalizeName(name) {
    let capName = '';
    for (l in name) { //! l is being treated like an index of an array. l = index 0 in this case s
        console.log(capName);
        if (l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName;
}

console.log(capitalizeName('sEaN'))

//! CHALLENGE
//? Make a tip calculator using a function
//?     Have it RETURN the value
//?     Capture that returned value in a VARIABLE
//?     Print that variable

function tipCalc(amount, percentage) {
    let totalTip = amount * percentage;
    return totalTip.toFixed(2); //! <--this rounds to the closest decimal 2 places out
}
console.log(tipCalc(32, .20));

let tipCalc = bill * 0.2;
let totalTip = tipCalc(42.63);
console.log(totalTip);