const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");
const muteBtn = document.querySelector("#mute-btn");
const muteImg = document.querySelector("#mute-img");
const replayBtn = document.querySelector("#replay-btn");
const speedUpBtn = document.querySelector("#speed-up-btn");
const speedUpImg = document.querySelector("#speed-up-img");

// Like button logic
let likeCount = 0;
const likeBtn = document.querySelector("#like-btn");
const likesDisplay = document.querySelector("#likes");

likeBtn.addEventListener("click", () => {
  likeCount++;
  likesDisplay.textContent = likeCount;
});

// Initialize video settings and event listeners
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
fullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", handleFullscreenChange);
muteBtn.addEventListener("click", toggleMute);
replayBtn.addEventListener("click", replayVideo);
speedUpBtn.addEventListener("click", toggleSpeedUp);

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

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    video.muted = true;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

function replayVideo() {
  video.currentTime = 0;
  if (!video.paused) {
    video.play();
  }
}

function toggleSpeedUp() {
  if (video.playbackRate === 1) {
    video.playbackRate = 3.5;
    speedUpImg.src = "https://img.icons8.com/ios/50/fast-forward.png";
  } else {
    video.playbackRate = 1;
    speedUpImg.src = "https://img.icons8.com/ios-glyphs/30/fast-forward.png";
  }
}
