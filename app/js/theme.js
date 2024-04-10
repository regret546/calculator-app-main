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
      break;
    case 2:
      circle.style.transform = "translateX(120%)";
      break;
    case 3:
      circle.style.transform = "translateX(260%)";
      break;
  }
});
