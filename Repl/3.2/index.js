let random = Math.floor(Math.random() * 10) + 1; //? setting a random number between 1 and 10
let guesses = 3; //? setting the starting guesses to 3
let hint = 'Guess a number between 1 and 10.'; //? setting the variable hint to a string describing the game

while (guesses > 0) {
  let guess = prompt (`${hint} You have ${guesses} tries.`); //? while player still has guesses left, displays message saying how many guesses left
  guess = (parseInt(guess)); //? changes guess to a number
  if (!guess) break;
  
  if (guess === random) {
    alert('Queue the Queen music, because you are the CHAMPION!'); //? if player guess matches the random number alert to champion
    turns = 0; //? set turns to 0
  } else {
    if (guess < random) hint = 'Too low! Do better!'; //? if guess is too low --> let them know to try again
    if (guess > random) hint = 'Too High! Do better!'; //? if guess is too high --> let them know to try again
    
    guesses = guesses -1; //? remove 1 from guesses remaining
  }
}
alert (`The number was ${random}.`) //? if player does not guess the number in 3 tries, tell them what the number was.