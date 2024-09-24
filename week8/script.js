const myVideo = document.querySelector("my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}
