let total = "";
let currentOperator = "";
let x = "";
let y = "";
const output = document.querySelector("#outputNums");
const allNums = document.querySelectorAll("#nums");
const allOperators = document.querySelectorAll("#operators");
const equals = document.querySelector("#equals");

function multiplcation(x, y) {
  console.log(x * y);
}
function division(x, y) {
  console.log(x / y);
}
function addition(x, y) {
  console.log(x + y);
}
function subtraction(x, y) {
  console.log(x - y);
}

for (let num of allNums) {
  num.addEventListener("click", function () {
    if (x === "") {
      x = num.innerText;
    }
    if (x !== "") {
      y = num.innerText;
    }
  });
}

for (let operator of allOperators) {
  operator.addEventListener("click", function () {
    currentOperator = operator.innerText;
  });
}

equals.addEventListener("click", function () {
  if (x !== "" && y !== "") {
    x = parseInt(x);
    y = parseInt(y);
    switch (currentOperator) {
      case "+":
        total = x + y;

        break;
      case "/":
        total = x / y;

        break;
      case "-":
        total = x - y;

        break;
      case "multiply":
        total = x * y;

        break;
    }
    y = "";
    x = total;
    console.log(total);
  }
});
