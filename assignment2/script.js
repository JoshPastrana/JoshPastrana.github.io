const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");
const muteBtn = document.querySelector("#mute-btn"); // Adding a mute button
const muteImg = document.querySelector("#mute-img"); // Icons I linked for the mute button
const replayBtn = document.querySelector("#replay-btn"); // Replay button
const speedUpBtn = document.querySelector("#speed-up-btn"); // Speed up button
const speedUpImg = document.querySelector("#speed-up-img"); // Icon for speed up button

// Initialize video settings and event listeners
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
fullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", handleFullscreenChange);
muteBtn.addEventListener("click", toggleMute); // Adding event listener for mute button
replayBtn.addEventListener("click", replayVideo); // Adding event listener for replay button
speedUpBtn.addEventListener("click", toggleSpeedUp); // Adding event listener for speed up button

// Play/Pause functionality
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Update progress bar
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Fullscreen functionality
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    fullscreenImg.src = "https://img.icons8.com/ios-glyphs/30/full-screen.png";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    fullscreenImg.src =
      "https://img.icons8.com/ios-glyphs/30/full-screen--v1.png";
  }
}

// Mute/Unmute functionality
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png"; // Unmute icon
  } else {
    video.muted = true;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"; // Mute icon
  }
}

// Replay functionality
function replayVideo() {
  video.currentTime = 0;

  // If the video was playing, continue playing after reset
  if (!video.paused) {
    video.play();
  }
}

// Speed Up functionality
function toggleSpeedUp() {
  if (video.playbackRate === 1) {
    video.playbackRate = 4.5; // Set to faster speed
    speedUpImg.src = "https://img.icons8.com/ios/50/fast-forward.png"; // Update icon for increased speed
  } else {
    video.playbackRate = 1; // Reset to normal speed
    speedUpImg.src = "https://img.icons8.com/ios-glyphs/30/fast-forward.png"; // Update icon for normal speed
  }
}
