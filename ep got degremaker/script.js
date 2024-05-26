
function playMusic(audioId) {
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
        if (audio.id !== audioId) {
            audio.pause();
        }
    });

    var currentAudio = document.getElementById(audioId);
    if (currentAudio.paused) {
        currentAudio.play();
    } else {
        currentAudio.pause();
    }
}
