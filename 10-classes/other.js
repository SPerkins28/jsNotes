//? Why do we need unique contexts? // VALUE TYPES
let x = 5;
let y = x;

console.log(`x:${x}, y:${y}`);


//? Ref Types
let a = {
    data: "Testing"
}
let b = a;
// let b = {
//     ...a //? Dont look this is not for today, also
//     //? google spread op js
// }
a.data = "This is new";
console.log(`a:${a.data}, b:${b.data}`);


