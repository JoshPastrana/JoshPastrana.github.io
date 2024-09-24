const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");
const muteBtn = document.querySelector("#mute-btn"); // adding a mute button
const muteImg = document.querySelector("#mute-img"); // Icons I linked for the mute button

video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Fullscreen functionality
fullscreenBtn.addEventListener("click", toggleFullscreen);

document.addEventListener("fullscreenchange", handleFullscreenChange);

// Enter full screen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    fullscreenImg.src = "https://img.icons8.com/ios-glyphs/30/full-screen.png";
  }
  // Do i need an exit with image
}

// keeping my icon after going back

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
