export default function audioPlay(
  audioElement: HTMLAudioElement,
  fromTime: number = 0
) {
  audioElement.currentTime = fromTime;
  audioElement.play();
}
