//* CONCISE BODY
let hi = () => console.log('hi') //! variable needs to be defined!!

hi();

//* BLOCK BODY 
let hi = () => { //! Use if we are making a for loop or fizz buzz
    console.log('hi');
}

//* CONCISE vs BLOCK
let apples = x => console.log(`There are ${x} apples.`); //! Use concise wherever you can!!
apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`)
}
apples(8);