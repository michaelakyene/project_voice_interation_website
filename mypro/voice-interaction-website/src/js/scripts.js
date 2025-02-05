document.getElementById('playAudio').addEventListener('click', function() {
  var playAudioButton = document.getElementById('playAudio');
  var playPauseAudioButton = document.getElementById('playPauseAudio');
  var audio = new Audio('assets/audio/sample1.mp3');

  playAudioButton.style.display = 'none';
  playPauseAudioButton.style.display = 'inline';

  playPauseAudioButton.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
          playPauseAudioButton.textContent = 'Pause';
      } else {
          audio.pause();
          playPauseAudioButton.textContent = 'Play';
      }
  });

  audio.play();
  playPauseAudioButton.textContent = 'Pause';
});