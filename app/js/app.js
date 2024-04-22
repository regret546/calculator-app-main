const output = document.querySelector("#outputNums");
const allNums = document.querySelectorAll("#nums");
const allOperators = document.querySelectorAll("#operators");
const equalBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const resetBtn = document.querySelector("#reset");

let total = "'";
let x = "";
let y = "";
let currentOperator = "";

const resolve = function () {
  if (x !== "" && y !== "") {
    x = parseFloat(x);
    y = parseFloat(y);
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
      case "x":
        total = x * y;
        break;
    }
    y = "";
    x = total;
    output.innerText = total;
  }
};

const reset = function () {
  total = "";
  x = "";
  y = "";
  currentOperator = "";
  output.innerText = "0";
};

allNums.forEach((num) => {
  num.addEventListener("click", function () {
    if (x === "" || currentOperator === "") {
      x += num.innerText;
      output.innerText = x;
    }
    if (x !== "" && currentOperator) {
      y += num.innerText;
      output.innerText = y;
    }
  });
});

allOperators.forEach((operator) => {
  operator.addEventListener("click", function () {
    currentOperator = operator.innerText;
    if (currentOperator) {
      resolve(currentOperator);
    }
  });
});

resetBtn.addEventListener("click", function () {
  reset();
});

equalBtn.addEventListener("click", function () {
  resolve();
});
