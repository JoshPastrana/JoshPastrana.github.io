// Get all instrument images
const instrumentImages = document.querySelectorAll(".instrument-image");

// Add click listeners to all images
instrumentImages.forEach((image) => {
  image.addEventListener("click", () => {
    const instrument = image.getAttribute("data-instrument");
    const audio = document.getElementById(`${instrument}-sound`);
    playSound(audio);
  });
});

// Function to play a sound
function playSound(audio) {
  audio.currentTime = 0; // Reset audio to the start
  audio.play();
}
