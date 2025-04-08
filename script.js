const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const label = button.textContent;

    stopSounds();

    if (label !== 'stop') {
      document.getElementById(label).play();
    }
  });
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
