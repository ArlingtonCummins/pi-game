const piString = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
const pi = Array.from(piString);

let effectsEnabled = true;

const piEl = document.getElementById('pi');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const gameOver = document.getElementById('gameOver');
const phoneMessage = document.getElementById('phoneMessage');
const start = document.getElementById('startButton');
const restart = document.getElementById('restartButton');
const menuButton = document.getElementById('menuButton');
const effectButton = document.getElementById('effectButton')
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');
const missedDigit = document.getElementById('missedDigit');

let inGame = false;
let currentDigit = 0;
let sessionHighScore = 0;

document.getElementsByTagName('body')[0].addEventListener('touchstart', () => {
  menu.style.display = 'none';
  game.style.display = 'none';
  gameOver.style.display = 'none';
  phoneMessage.style.display = 'grid';
})

start.addEventListener('click', () => {
  menu.style.display = 'none';
  game.style.display = 'grid';
  gameOver.style.display = 'none';
  inGame = true;
});

restart.addEventListener('click', () => {
  menu.style.display = 'none';
  game.style.display = 'grid';
  gameOver.style.display = 'none';
  inGame = true;
});

menuButton.addEventListener('click', () => {
  menu.style.display = 'grid';
  game.style.display = 'none';
  gameOver.style.display = 'none';
});

effectButton.addEventListener ('click', () => {
  effectsEnabled = !effectsEnabled;
  if (effectsEnabled) {
    effectButton.innerHTML = 'Disable Effects';
  }
  else {
    effectButton.innerHTML = 'Enable Effects';
  }
})

window.addEventListener('keydown', (event) => {
  if (inGame) {
    if (event.key === pi[currentDigit].toString()) {
      piEl.innerHTML = piEl.innerHTML + pi[currentDigit];
      currentDigit++;
    }
    else {
      score.innerHTML = 'Your Score was ' + currentDigit;
      missedDigit.innerHTML = 'The digit you missed was ' + pi[currentDigit];
      if (sessionHighScore < currentDigit) {
        sessionHighScore = currentDigit;
        highScore.innerHTML = 'Your high score for this session is ' + sessionHighScore;
      }
      currentDigit = 0;
      piEl.innerHTML = '3.';
      inGame = false;
      menu.style.display = 'none';
      game.style.display = 'none';
      gameOver.style.display = 'grid';
    }
    
    if (effectsEnabled) {
      piEl.classList.add('anim');
    }
  }
})

piEl.addEventListener('animationend', () => {
  piEl.classList.remove('anim');
})
