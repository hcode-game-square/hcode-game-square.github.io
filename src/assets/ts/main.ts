import createCircle from './functions/createCircle.js';
import initEvents from './functions/initEvents.js';
import setScore from './functions/setScore.js';

const Game = {
  score: 0,
  time: '2',
};

function nextCallback() {
  Game.score = Game.score + 1;
  setScore(Game.score);
  Game.time = Number(parseFloat(Game.time) - 0.05).toFixed(2);
  if (parseFloat(Game.time) < 0.1) {
    Game.time = '0.1';
  }
  createCircle(Game.time, nextCallback);
}

const playGame = () => {
  createCircle(Game.time, nextCallback);
};

initEvents(playGame);
