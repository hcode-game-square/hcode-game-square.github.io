export function createAudio(source: string, volume: number = 1) {
  const audioEl = document.createElement('audio');
  audioEl.src = `assets/audios/${source}`;
  audioEl.autoplay = false;
  audioEl.volume = volume;
  return audioEl;
}
