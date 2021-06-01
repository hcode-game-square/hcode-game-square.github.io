export default function setScore(score: number) {
  const scoreElement = document.querySelector('#score span') as HTMLSpanElement;

  if (scoreElement) {
    scoreElement.innerText = String(score);
  }
}
