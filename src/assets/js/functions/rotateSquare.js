import { audioRotate } from '../audios/index.js';
import colors from '../consts/colors.js';
import audioPlay from './audioPlay.js';
import { squareElement } from './elements.js';
export default function rotateSquare(directionRight) {
    if (directionRight === void 0) { directionRight = true; }
    audioPlay(audioRotate);
    var square = squareElement();
    var color = Number(square.dataset.color);
    var rotate = Number(square.dataset.rotate);
    if (directionRight) {
        rotate += 90;
        color++;
        if (color >= colors.length) {
            color = 0;
        }
    }
    else {
        rotate -= 90;
        color--;
        if (color <= -1) {
            color = colors.length - 1;
        }
    }
    square.dataset.rotate = String(rotate);
    square.dataset.color = String(color);
    square.style.transform = "rotate(" + rotate + "deg)";
}
