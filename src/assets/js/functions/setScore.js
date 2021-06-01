export default function setScore(score) {
    var scoreElement = document.querySelector('#score span');
    if (scoreElement) {
        scoreElement.innerText = String(score);
    }
}
