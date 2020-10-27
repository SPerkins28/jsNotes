//? Classes

//? They are a blueprint for like things

// let greet = String('Hello World');

// class Automobile { 
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
// }

// let myCar = new Automobile ('Jeep', 'Wrangler');

// console.log(myCar.make);
// console.log(myCar.model);

// //? Unamed vs Named Classes
// //? Unamed Syntax
// let Vehicle = class {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }

// console.log(Vehicle.name);


//? Named
// let Vehicle = class Vehicle2 {
//     constructor(make, nodel) {
//         this.make = make;
//         this.model = model;
//     }
// }
// console.log(Vehicle.name);


//? Methods

//? Old Syntax
// const automobile = {
//     start: function() {
//         //?
//     },
//     stop: function() {
//         //?
//     }
// } 

//? New Syntax - Prototype Method

// const automobile = {
//     start() {

//     },
//     stop() {

//     }
// }
class Automobile { 
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`The ${this.make} ${this.model}'s engine started!`);
    }
    
    stop() {
        console.log(`The ${this.make} ${this.model}'s engine stoped!`);
    };
}

let myOtherCar = new Automobile('Honda', 'Civic');
myOtherCar.start();

class People {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

let person = {
    name: "Justin",
    age: 27,
    speak: () => {`This is ${this.name} talking`}
}


let person2 = new People('Adam', 25)

console.log(person.name);
person.speak();