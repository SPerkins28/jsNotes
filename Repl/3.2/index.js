document.body.onload = addElements;

function addElements() {
  const label = document.createElement("label");
  label.textContent = 'Pick a number between 1 and 10: '
  document.body.appendChild(label);

  const inputArea = document.createElement("input");
  inputArea.type = 'text';
  inputArea.id = 'numberGuess';
  inputArea.className = 'numberGuess';
  document.body.appendChild(inputArea);

  const subBut = document.createElement("input");
  subBut.type = 'submit';
  subBut.value = 'submit';
  subBut.id = 'guessSubmit';
  document.body.appendChild(subBut);
  subBut.addEventListener('click', numberCheck);

  const newDiv = document.createElement("div");
  newDiv.className = 'results'
  document.body.appendChild(newDiv);

  const newPara1 = document.createElement("p");
  const newPara2 = document.createElement("p");
  const newPara3 = document.createElement("p");
  newPara1.className = 'guesses';
  newPara2.className = 'lastResults';
  newPara3.className = 'lowOrHi';
  newDiv.appendChild(newPara1);
  newDiv.appendChild(newPara2);
  newDiv.appendChild(newPara3);

}
let guessCount = 1; //? setting initial guess count to start at 1
const guessSubmit = document.querySelector('.guessSubmit');

function numberCheck(e) {
  e.preventDefault();
  const guessField = document.querySelector('.numberGuess');
  let randomNumber = Math.floor(Math.random() * 10) + 1; //? Randomizes a number between 1 & 10 for the user to try and guess

  const guesses = document.querySelector('.guesses');

  const lowOrHi = document.querySelector('.lowOrHi');

  let playerGuess = Number(guessField.value); //? setting variable that is the value input in the guessField input 
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: '; //? displays the previous guesses text if player guess count is equal to 1
  }
  guesses.textContent += playerGuess + ' '; //? each time a player guesses, the number is added to the end of the string
  
  if (playerGuess === randomNumber) {
    alert('Congratulations! You guessed correct!');
    //? if player guesses correct number --> alert pops with congrats
    lowOrHi.textContent = '';
    setGameOver(); //? runs funtion to reset game at start
    return false;
  } else if (guessCount === 3) {
      alert('GAME OVER!'); //? if player is still wrong after 3 guesses, alerts to game over
      setGameOver(); //? runs function to reset game
      return false;
  } else {
    if (playerGuess < randomNumber) {
      alert('Last guess was too low!'); //? if player guess was low --> alert
      return false;
    } else if (playerGuess > randomNumber) {
      alert('Last guess was too high!'); //? if player guess was high --> alert
      return false;
    }
  }
  guessCount++; //? adding 1 to the guess count each guess
  guessField.value = ''; //? sets the guess field to empty
  guessField.focus(); //? focuses function on the guess field again
}



function setGameOver() {
  let resetButton;
  
  guessField.disabled = true; //? does not allow anything to be entered into guess field if guessed correctly or not guessed within the turn limit
  guessSubmit.disabled = true; //? does not allow the submit button to be pressed if guessed correctly or not guessed within the turn limit
  resetButton = document.createElement('button'); //? creates a reset button once game over
  resetButton.textContent = 'Try Again?'; //? adds text to reset button
  document.body.append(resetButton); //? adds button to document
  resetButton.addEventListener('click', tryAgain); //? adds listener to reset button and runs function on click
}

function tryAgain() {
  guessCount = 1; //? resets guess count to 1
  
  const nextAttempt = document.querySelectorAll('.results p'); //? resets all info in each paragraph
  for (let i = 0; i < nextAttempt.length; i++) {
    nextAttempt[i].textContent = '';
  }
  
  resetButton.parentNode.removeChild(resetButton); //? removes reset button
  
  guessField.disabled = false; //? allows entry in guess field
  guessSubmit.disabled = false; //? allows submit button to be clicked
  guessField.value = ''; //? sets guess field value to empty
  guessField.focus(); //? focus on the guess field again
  
  randomNumber = Math.floor(Math.random() * 10) + 1; //? regenerates a random number beteween 1 & 10
  
}