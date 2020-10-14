//? USE CAPITAL LETTERS FOR CONSTRUCTOR FUNCTIONS
function Person(name, age, canVote) {
    //? Person.name = name
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);

let person4 = new Person('Sean', 80, true);
let person5 = new Person('Emily', 31, true);
console.log(person4.name);
console.log(person5.name);
person4['name'] = 'Adam'
console.log(person4.name);