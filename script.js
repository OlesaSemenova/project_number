'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// //Sibligs - братья и сестра(элементы которые находятся на одной линии иерархии)

// document.querySelector('.guess-message').textContent = 'Правильно!';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.number-input').value);

// const eventHandler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';

    //Player won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //Too high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }

    //To low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.number-input').value = '';
});
