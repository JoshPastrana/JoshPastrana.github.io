const likeBtn = document.querySelector("#like-btn");
const likesDisplay = document.querySelector("#likes");
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
// All off the const I put for the buttons to work ranging from the video player itself to the speed up buttons

let likeCount = 0;

likeBtn.addEventListener("click", () => {
  likeCount++;
  likesDisplay.textContent = likeCount;
});

// Similar to const I grouped all event listeners to make it more readable
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
fullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", handleFullscreenChange);
muteBtn.addEventListener("click", toggleMute);
replayBtn.addEventListener("click", replayVideo);
speedUpBtn.addEventListener("click", toggleSpeedUp);

// Play and pause function. checking if the video is paused or ended. If so, it plays the video and switches the icon to pause.
// Otherwise, it pauses the video and switches the icon to play.
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Video progress bar updating the % of video it is at, The value is multiplied by 100 to convert it into a percentage,
// and the width of the progress bar is updated to show how far along the video is.
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Full screen function to switch between full and normal viewing
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    fullscreenImg.src = "https://img.icons8.com/ios-glyphs/30/full-screen.png";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // When exiting full screen mode still shows icon
    }
    fullscreenImg.src =
      "https://img.icons8.com/ios-glyphs/30/full-screen--v1.png";
  }
}
// Video muting/unmuting basically updating to show on and off when clicked
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    video.muted = true;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

// If selected it resets video time to 0, I added pause to ensure that
// if replayed when video is paused it stays like that
function replayVideo() {
  video.currentTime = 0;
  if (!video.paused) {
    video.play();
  }
}

// Speed up function, I decided for 3.5 as it wasnt too fast or slow, right in the middle which I liked
// With this in case I made sure the icon was different when selected to speed up.
function toggleSpeedUp() {
  if (video.playbackRate === 1) {
    video.playbackRate = 3.5;
    speedUpImg.src = "https://img.icons8.com/ios/50/fast-forward.png";
  } else {
    video.playbackRate = 1;
    speedUpImg.src = "https://img.icons8.com/ios-glyphs/30/fast-forward.png";
  }
}
