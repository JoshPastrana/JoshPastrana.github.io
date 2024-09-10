/*function checkGrade() {
    const a1 = document.querySelector("#answer1");
    const a1Value = parseFloat(a1.value); // Convert to number
    console.log(a1Value);
  
    const a2 = document.querySelector("#answer2");
    const a2Value = parseFloat(a2.value); // Convert to number
    console.log(a2Value);
  
    const total = calculateTotal(a1Value, a2Value);
    console.log(total);
    reportBackGrade(total);
    // a1.value = "";
  }
  
  function calculateTotal(a, b) {
    return a + b;
  }
  
  function reportBackGrade(score) {
    let report = document.querySelector("#report");
    report.innerHTML = "";
    if (score > 30) {
      report.innerHTML = `You scored <span class="grade">High Distinction </span>!!!`;
    } else if (score > 20 && score <= 30) {
      report.innerHTML = `You scored <span class="grade">Distinction </span>!!!`;
    } else if (score > 10 && score <= 20) {
      report.innerHTML = `You scored <span class="grade">Passing marks </span>!!!`;
    } else {
      report.innerHTML = `Sorry, you <span class="fgrade">failed </span>!!!`;
    }
  } */
// function checkGrade() {
//   const a1 = document.querySelector("#answer1");
//   console.log(a1.value);
//   const a2 = document.querySelector("#answer2");
//   console.log(a2.value);
//   let a1Value = parseFloat(a1.value);
//   let a2Value = parseFloat(a2.value);
//   let total = calculateTotal(a1Value, a2Value);
//   //   parseFloat(a1.value) + parseFloat(a2.value); -also works
//   console.log(total);
//   giveReport(total);
// }

// function calculateTotal(a, b) {
//   let sum = a + b;
//   return sum;
// }
// function giveReport(score) {
//   const report = document.querySelector("#report");
//   if (score > 30) {
//     console.log("you got HD");
//     report.textConte  nt = "you got HD";
//   } else if (score > 20 && score <= 30) {
//     console.log("you got a D");
//     report.textContent = "you got a D";
//   }
// }
function giveReport(score) {
  reportError.textContent = "you got HD";

  if (score > 30) {
    console.log("you got D");
    report.textContent = "you got a HD";
  } else if (score > 20 && score <= 30) console.log("you got D");
  report.textContent = "you got a D";
}

const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header.innerHTML);
// const para = document.querySelector("p");
// console.log(para);
// para.textContent = "What is your as1 score?";

// const para1 = document.querySelector("#question2");
// console.log(para1);
// para1.textContent = "What is your as2 score?";

// // const allPara = document.querySelector("p");
// // console.log(allPara);
// const heading = document.querySelector("h1");
// console.log(heading.textContent);

// heading.textContent = "new heading";
// heading.classList.add("red-heading");
// heading.classList.add("blue-heading");

// heading.textContent = "new heading";

// const abcd = document.querySelector("abcs");
// console.log(abcd);
// const allAbcd = document.querySelector("abcd");
// console.log();
