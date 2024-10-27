// Get all instrument images
const instrumentImages = document.querySelectorAll(".instrument-image");
// Selected all the images with the class "instrument-image" to add event listeners.

// Originally was going to make it when they hover the mouse over the image it plays the sound and clicking will show information, but I believe better when they click it, it will play sound, so the hover element can show the information instead
// This was better as users can see the image, information and sound all together giving them a better visual and informal idea of what the instrument does
instrumentImages.forEach((image) => {
  image.addEventListener("click", () => {
    // Adds a click event listener to each instrument image.
    const instrument = image.getAttribute("data-instrument");
    // Retrieves the instrument name from the "data-instrument" attribute.
    const audio = document.getElementById(`${instrument}-sound`);
    // Selects the corresponding audio element by matching the instrument name.

    playSound(audio);
    // Calls the function to play the audio of the selected instrument.
  });
});

// The function to play a sound
function playSound(audio) {
  audio.currentTime = 0;
  // Resets the audio playback to the beginning.
  audio.play();
  // Plays the selected audio.
}
