import { audioFail, audioMusic, audioPoint } from '../audios/index.js';
import audioPlay from './audioPlay.js';
import { circleElement, squareElement, startScreeenElement, } from './elements.js';
export default function check() {
    var circleColor = circleElement().dataset.color;
    var squareColor = squareElement().dataset.color;
    if (Number(circleColor) === Number(squareColor)) {
        audioPlay(audioPoint);
        return true;
    }
    else {
        startScreeenElement().style.display = 'flex';
        audioPlay(audioFail, 1);
        audioMusic.pause();
        console.error('GAME OVER');
        return false;
    }
}
