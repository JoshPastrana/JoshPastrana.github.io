// Get references to all instrument elements
const guitarImage = document.getElementById("guitar-image");
const drumsImage = document.querySelector('img[data-instrument="drums"]');
const pianoImage = document.querySelector('img[data-instrument="piano"]');
const bassImage = document.querySelector('img[data-instrument="bass"]');

// Get audio elements
const guitarAudio = document.getElementById("guitar-sound");
const drumsAudio = document.getElementById("drums-sound");
const pianoAudio = document.getElementById("piano-sound");
const bassAudio = document.getElementById("bass-sound");

// Add click event listeners to play respective sounds
guitarImage.addEventListener("click", () => playSound(guitarAudio));
drumsImage.addEventListener("click", () => playSound(drumsAudio));
pianoImage.addEventListener("click", () => playSound(pianoAudio));
bassImage.addEventListener("click", () => playSound(bassAudio));

// Function to play a sound
function playSound(audio) {
  audio.currentTime = 0; // Reset to start if clicked multiple times
  audio.play();
}
