'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');

    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayGuessMessage('Начни угадывать!');
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.number-input').value = '';
});
