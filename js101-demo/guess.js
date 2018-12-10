/*
@Code for js101 test, the game idea is based on MDN documentation topic:
"A first splash into JavaScript"
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

Mutasim Issa | mutasim@sourcya.com
*/

    //initalize the game
    document.addEventListener("DOMContentLoaded", function initGame() {
    document.body.innerHTML =   '';
    let randomNumber= Math.floor(Math.random() * 100) +1 //returns Random integer between 1 and 100
    let tries = 1;

    //create markup instead of using the original markup
    const heading = document.createElement('h3');
    const description = document.createElement('p');
    const inputLabel = document.createElement('label');
    const inputSubmit = document.createElement('input');
    const inputField = document.createElement('input');
    const inputReset = document.createElement('input');

    //assigning for markup
    heading.textContent = 'Welcome to the guessing game!';
    description.textContent = 'We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We will tell you if your guess was too high or too low.';
    inputLabel.textContent = 'Enter your guess ';
    inputField.id='guess';
    inputField.type = 'text';
    inputSubmit.value = 'Submit';
    inputSubmit.type = 'submit';
    inputSubmit.id = 'submit';
    inputReset.value = 'Reset';
    inputReset.type = 'submit';
    inputReset.id = 'reset';

    //start the lights
    document.body.appendChild(heading);
    document.body.appendChild(description);
    document.body.appendChild(inputLabel);
    document.body.appendChild(inputField);
    document.body.appendChild(inputSubmit);
    inputField.focus();

    //listen for submit
    inputSubmit.addEventListener('click', checkGuess);

    //core function
    function checkGuess() {
      const previousGuess = document.createElement('p');
      document.body.appendChild(previousGuess);

      //TODO check for non-numerical entries in the inputField.value
      if (tries < 10) {
        if (Number(inputField.value) === randomNumber) {
          previousGuess.textContent = 'RIGHT! ' + inputField.value;
          document.body.removeChild(inputSubmit);
          reset();
        //TODO fix dirty duplicated elseif and else
        } else if (randomNumber < inputField.value) {
          previousGuess.textContent = 'Your Guess is too high!';
          tries++;
          inputField.value = '';
          inputField.focus();
        } else {
          previousGuess.textContent = 'Your Guess is too low!';
          tries++;
          inputField.value = '';
          inputField.focus();
        }
      }else {
        previousGuess.textContent = 'GAME OVER!!!';
        reset();
      }
    }

    //reset function
    function reset() {
    document.body.appendChild(inputReset);
    inputReset.addEventListener('click', initGame)
    }
});
