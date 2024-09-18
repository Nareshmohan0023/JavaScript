'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const user_input = document.querySelector('.guess');
const highscore = document.querySelector('.highscore');
let highscore_value = Number(highscore.textContent);
let random_number = Math.trunc(Math.random() * 20 + 1);
// number.textContent = random_number;
console.log(random_number);

let score_value = 20;
score.textContent = score_value;
console.log(highscore_value);
console.log(score_value);

const check_btn = document.querySelector('.check');
check_btn.addEventListener('click', function () {
  const user_input_value = Number(user_input.value);
  console.log(user_input_value, typeof user_input_value);
  if (!user_input_value) {
    message.textContent = 'First Enter a number';
  } else if (user_input_value === random_number) {
    message.textContent = '🎉congrats';
    number.textContent = random_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    check_btn.disabled = true;
    if (score_value > highscore_value) {
      highscore_value = score_value; // Update the highscore_value variable
      highscore.textContent = highscore_value;
    }
  } else if (user_input_value > Number(random_number)) {
    if (score_value > 1) {
      message.textContent = '⏬Try lower';
      score_value--;
      score.textContent = score_value;
    } else {
      message.textContent = 'game over';
      score.textContent = 0;
    }
  } else if (user_input_value < Number(random_number)) {
    if (score_value > 1) {
      message.textContent = '⬆️Try higher';
      score_value--;
      score.textContent = score_value;
    } else {
      message.textContent = 'game over';
      score.textContent = 0;
      number.textContent = random_number;
      document.querySelector('body').style.backgroundColor = 'red';
      check_btn.disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  random_number = Math.trunc(Math.random() * 20) + 1;
  console.log(`the next random number ${random_number}`); //notworking
  // document.querySelector('.message').textContent = 'Start guessing...';
  score_value = 20;
  score.textContent = score_value;
  message.textContent = 'start guessing again';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  check_btn.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';

  //   document.querySelector('.number').style.width = '15rem';
});
