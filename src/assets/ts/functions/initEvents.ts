import { audioMusic } from '../audios/index.js';
import audioPlay from './audioPlay.js';
import { buttonElement, startScreeenElement } from './elements.js';
import rotateSquare from './rotateSquare.js';

export default function initEvents(playGame: () => void) {
  buttonElement().addEventListener('click', () => {
    startScreeenElement().style.display = 'none';

    audioPlay(audioMusic);

    if (typeof playGame === 'function') {
      playGame();
    }
  });

  document.body.addEventListener('click', () => {
    rotateSquare();
  });

  document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    rotateSquare(false);
  });
}
