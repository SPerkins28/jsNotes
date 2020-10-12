//! Fizz Buzz Challenge 1
//? - create a variable named FB that gets initialized with a number
//?     - write a conditional that:
//?       - prints out "Fizz" if the number is divisible by 3
//?       - prints out "Buzz" if the number is divisible by 5
//?       - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5

//? Ternary
let num = 14;

(num % 3 == 0 && num % 5 == 0) ? console.log("Fizz Buzz")
        : (num % 3 == 0) ? console.log("Fizz")
        : (num % 5 == 0) ? console.log("Buzz")
        : console.log(num);

//? IF ELSE
let num = 3;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz");
} else if (num % 3 === 0){
        console.log("Fizz");
} else if (num % 5 === 0) {
        console.log("Buzz");
} else {
        console.log(num);
}

//? Switch
let num = 19;

switch (true) {
        case (num % 5 === 0 && num % 3 === 0):
                console.log("Fizz Buzz");
                break;
        case (num % 3 === 0):
                console.log("Fizz");
                break;
        case (num % 5 === 0):
                console.log("Buzz");
                break;
        default:
                console.log(num);      
}


//! FIZZ BUZZ Challenge 2
//? - write a for loop running between the numbers 0 - 100
//?     - for multiples of 3, instead of the number, console.log "Fizz"
//?     - for multiples of 5 console.log "Buzz";
//?     - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
//?     - for any other number, console.log the value

//? Else if For Loop
for (i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
                console.log("Fizz Buzz");
        } else if (i % 3 === 0){
                console.log("Fizz");
        } else if (i % 5 === 0) {
                console.log("Buzz");
        } else {
                console.log(i);
}
}

//? Switch For Loop
for (FB = 0; FB <+ 100; FB ++) {
        switch(true) {
             case (FB % 3 == 0 && FB % 5 == 0):
                console.log('Fizz Buzz');
                break;
             case (FB % 3 == 0):
                console.log('Fizz');
                break;
             case (FB % 5 == 0):
                console.log('Buzz');
                break;
             default:
                console.log(FB);
        }
}

//? Ternary For Loop
for (FB = 0; FB <= 100; FB++) {
       (FB % 15 == 0) ? console.log('Fizz Buzz')
       : (FB % 5 == 0) ? console.log('Buzz')
       : (FB % 3 == 0) ? console.log('Fizz')
       : console.log(FB);
}