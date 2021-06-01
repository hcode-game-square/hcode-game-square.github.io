import colors from '../consts/colors.js';
export default function getRandomColorIndex() {
    return Math.floor(Math.random() * colors.length);
}
