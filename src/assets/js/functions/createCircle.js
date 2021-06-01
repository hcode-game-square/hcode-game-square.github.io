import colors from '../consts/colors.js';
import check from './check.js';
import getRandomColorIndex from './getRandomColorIndex.js';
export default function createCircle(time, nextCallback) {
    document.querySelectorAll('.circle').forEach(function (el) { return el.remove(); });
    var colorIndex = getRandomColorIndex();
    var circleEl = document.createElement('div');
    circleEl.style.transitionDuration = time + "s";
    circleEl.className = "circle " + colors[colorIndex];
    circleEl.dataset.color = String(colorIndex);
    document.body.appendChild(circleEl);
    setTimeout(function () {
        circleEl.classList.add('play');
        setTimeout(function () {
            if (check()) {
                nextCallback();
            }
        }, parseFloat(time) * 1000);
    }, 100);
}
