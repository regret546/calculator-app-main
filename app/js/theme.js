const outputNums = document.querySelector("#outputNums");

function addPunctuation(number) {
  const num = parseFloat(number);
  const numFormatted = num.toLocaleString("en-US");
  outputNums.innerText = numFormatted.toString();
}

let currentButton = 1;
const buttonToggle = document.querySelector("#toggle-buttons");

buttonToggle.addEventListener("click", function (e) {
  const circle = document.querySelector("#circle");
  e.preventDefault();
  if (currentButton === 3) {
    currentButton = 1;
  } else {
    currentButton += 1;
  }

  switch (currentButton) {
    case 1:
      circle.style.transform = "translateX(0%)";
      document.body.className = "";
      break;
    case 2:
      circle.style.transform = "translateX(120%)";
      document.body.classList.add("main");
      document.body.classList.add("theme2");
      break;
    case 3:
      circle.style.transform = "translateX(260%)";
      document.body.classList.remove("theme2");
      document.body.classList.add("theme3");
      break;
  }
});
