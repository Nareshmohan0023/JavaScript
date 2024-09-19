'use strict';

//scelecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
console.log(player0El);
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let currentPlayer;
currentPlayer = document.getElementById(`current--${activePlayer}`);
console.log(currentPlayer);

//change player function
const chngPlayer = function () {
  currentPlayer = document.getElementById(`current--${activePlayer}`);
  currentScore = 0;
  currentPlayer.textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//new btn functions

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing === true) {
    //1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.check for dice 1 if it is true switch player
    if (dice !== 1) {
      //add dice to current score
      currentPlayer = document.getElementById(`current--${activePlayer}`);
      currentScore += dice;
      currentPlayer.textContent = currentScore;
    } else {
      //switch to next player
      chngPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //   score0El.textContent += currentScore;
  //   currentScore = 0;

  if (playing === true) {
    //add currentscore to active players score
    console.log(activePlayer);
    console.log(currentScore);
    scores[activePlayer] += currentScore;
    const currentPlayerScr = document.getElementById(`score--${activePlayer}`);
    currentPlayerScr.textContent = scores[activePlayer];

    //check if players score >=100
    //and game is finished who first reached 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      chngPlayer();
    }
  }

  //switch to the next player
});
btnNew.addEventListener('click', init);
