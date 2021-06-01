import { audioRotate } from '../audios/index.js';
import colors from '../consts/colors.js';
import audioPlay from './audioPlay.js';
import { squareElement } from './elements.js';

export default function rotateSquare(directionRight = true) {
  audioPlay(audioRotate);

  const square = squareElement();

  let color = Number(square.dataset.color);
  let rotate = Number(square.dataset.rotate);

  if (directionRight) {
    rotate += 90;
    color++;

    if (color >= colors.length) {
      color = 0;
    }
  } else {
    rotate -= 90;
    color--;

    if (color <= -1) {
      color = colors.length - 1;
    }
  }

  square.dataset.rotate = String(rotate);
  square.dataset.color = String(color);

  square.style.transform = `rotate(${rotate}deg)`;
}
