/*
@Code for js101 test, the game idea is based on MDN documentation topic:
"A first splash into JavaScript"
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

Author: Mutasim Issa | mutasim@sourcya.com
Version: 1.1.0
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
    const previousGuess = document.createElement('p');

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


    document.body.appendChild(heading);
    document.body.appendChild(description);
    document.body.appendChild(inputLabel);
    document.body.appendChild(inputField);
    document.body.appendChild(inputSubmit);
    document.body.appendChild(previousGuess);

    inputField.focus();

    inputSubmit.addEventListener('click', function(e){
      let validateInput = Math.floor(Number(inputField.value));
      if (validateInput === Infinity || String(validateInput) !== inputField.value || validateInput <= 0) {
          e.preventDefault();
          alert('WTF!!, only positive Integers except 0 can be passed!');
          inputField.focus();
      }else{
          checkGuess();
      }
    });

    function checkGuess() {

      previousGuess.innerHTML = previousGuess.innerHTML.replace('blue', 'black');

      if (tries < 10) {
        if (Number(inputField.value) === randomNumber) {
          previousGuess.innerHTML = '<span style="color:green">RIGHT!!!</span></br></br>' + previousGuess.innerHTML;
          document.body.removeChild(inputSubmit);
          reset();
        } else if (randomNumber < inputField.value) {
          previousGuess.innerHTML = '<span style="color:blue">Your Guess is too high!<span></br>' + previousGuess.innerHTML;
          tries++;
          inputField.value = '';
          inputField.focus();
        } else {
          previousGuess.innerHTML = '<span style="color:blue">Your Guess is too low!</span></br>' + previousGuess.innerHTML;
          tries++;
          inputField.value = '';
          inputField.focus();
        }
      }else {
        previousGuess.innerHTML = '<span style="color:red">GAME OVER!!! </span></br></br>' + previousGuess.innerHTML;
        resetGame();
      }
    }

    function resetGame() {
    document.body.appendChild(inputReset);
    inputReset.addEventListener('click', initGame)
    }
});
