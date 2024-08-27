let temp = document.querySelector("#temp");
// console.log(temp.value);
function checkweather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(outer);
  console.log(temp.value);
  if (temp.value >= 40) {
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "blue";
    console.log("its hot");
  } else if (temp.value <= 40 && temp.value >= 30) {
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "yellow";
    console.log("its cold");
  } else if (temp.value <= 30 && temp.value >= 15) {
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "grey";
    console.log("it is freezing");
  }
}
