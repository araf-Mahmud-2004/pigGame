'use strict';
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document. getElementById('current--0');
const current1El = document. getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function(){
    if(playing){
        diceEl.classList.remove('hidden');
    let diceRoll = Math.trunc(Math.random() * 6) +1;
    diceEl.src = `dice-${diceRoll}.png`;

    if(diceRoll !==1){
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        switchPlayer();
    }
    }
});

btnHold.addEventListener('click', function(){
if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 50){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');

    }
    else{
        switchPlayer();
    }
}
    
})
btnNew.addEventListener('click', function(){
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
})