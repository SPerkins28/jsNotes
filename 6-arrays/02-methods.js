let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food);

console.log('push:', food[5]); //? shows only what we have added to the end of the array


//? 1. remove from what index (starts at 0)
//? 2. remove how many
//? 3. add what
//?        (1)(2)    (3)
food.splice(1, 1, 'Bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); //? This is not removing anything and adding Sweet Potato Pie in front of the index listed
console.log('splice2:', food);

food.splice(0, 3, 'Turkey'); //? This removes 3 items starting at index 0 and adds Turkey starting at index 0
console.log('splice3:', food);

food.pop(); //? Removes the last item from the array
console.log('pop:', food);

food.shift(); //? Removes the first item from the array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); //? Add the items in () to the front of the array
console.log('unshift:', food);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

dogs.push('Bull Terrier');
dogs.unshift('Great Dane', 'Husky');

console.log(dogs);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

//? Regular for loop
for (let i = 0; i < dogs.length; i++) { //? As long as i is less than the length of the for loop -- keep running the loop
    console.log(dogs[i]);
}

//? forEach()
dogs.forEach(dog => console.log(dog)); //? same thing as for loop above but on one line **Has an arrow function**

dogs.forEach(function(dog) {
    console.log(dog);
})

dogs.forEach((dog, index) => { //? Logs each dog in the array and the index number of each dog
    console.log(dog);
    console.log(index);
})

//! CHALLENGE
//? - (Go look at MDN docs to remind you):
//? - Create an array containing movies
//? - Use .forEach() to list your movies
//? - Add another movie at the end
//? - And replace one of your existing movies with another one

let movies = ['Top Gun', 'End Game', 'Palm Springs', 'Onward', 'Human Centepede'];

movies.push('Civil War');
console.log(movies);

movies.splice(4, 1, 'Thor: Ragnarok');
console.log(movies)

movies.forEach(movie => console.log(movie));


let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array) {
    let revArray = arr.reverse();
    revArray.forEach(num => console.log(num));
} else {
    console.log('not an array');
}