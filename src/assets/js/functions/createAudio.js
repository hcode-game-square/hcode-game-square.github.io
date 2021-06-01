export function createAudio(source, volume) {
    if (volume === void 0) { volume = 1; }
    var audioEl = document.createElement('audio');
    audioEl.src = "assets/audios/" + source;
    audioEl.autoplay = false;
    audioEl.volume = volume;
    return audioEl;
}
