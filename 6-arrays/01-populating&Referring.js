let list = ['chips', 'apples', 'coffee', 'milk'];

console.log(list[1]);
console.log(list[2]);



console.log(typeof students);
console.log(students instanceof Array); 

//! CHALLENGE
//? dive into the nested array and pull the value 'Jason'
//?     - print out "Hello Jason!
let students = ['Ro', 'Travis', 'Taylor', 'Justin', 23, true, ['Isaiah', 'Jason', 'Adam']];

console.log('Hello ' + students[6][1] + '!');
console.log(`Hello ${students[6][1]}!`);