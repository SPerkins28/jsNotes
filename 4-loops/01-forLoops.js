let i = 7;

for (i = 0; i < 10; i++){ //? this is saying i = i + 1
    console.log(i);
}

for (i = 2; i < 20; i += 2){
    console.log(i);
}

console.log('globabl variable:', i);

//! Challenge: using a for loop, count from 10 to 0, doing down by 1
let i = 10;

for (i = 10; i >= 0; i --){
    console.log(i);
}

//! Challenge: using a for loop, count from 0, going down by 2's to -24

let i = 0

for (i = 0; i >= -24; i -= 2){
    console.log(i);
}

//! Challenge: using a for loop, go through a name and display each letter individually
let name = "Sean Perkins";

for (let i = 0; i < name.length; i++){
    if (name[i] != " "){ //? If you want to skip the space in between the names
    console.log(name[i]);
    }
}

//?    (1)                     (2)
//?  for (<your_name_choice> of <some collection>)
//?  1. for loop dec.
//?  2. of - is a built in word saying for all things in a collection
//? common name is "for of" loop

for (letter of name){
    console.log(letter);
}

//! Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0;

for (let i = 1; i <= 50; i++){
    sum += i;
}
console.log(sum);