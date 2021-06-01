import colors from '../consts/colors.js';
import check from './check.js';
import getRandomColorIndex from './getRandomColorIndex.js';

export default function createCircle(time: string, nextCallback: () => void) {
  document.querySelectorAll('.circle').forEach((el) => el.remove());

  const colorIndex = getRandomColorIndex();

  const circleEl = document.createElement('div');

  circleEl.style.transitionDuration = `${time}s`;
  circleEl.className = `circle ${colors[colorIndex]}`;
  circleEl.dataset.color = String(colorIndex);

  document.body.appendChild(circleEl);

  setTimeout(() => {
    circleEl.classList.add('play');

    setTimeout(() => {
      if (check()) {
        nextCallback();
      }
    }, parseFloat(time) * 1000);
  }, 100);
}
