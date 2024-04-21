let totalActive = false;
let total = "";
let currentValue = "";
let currentOperator = "";
let x = "";
let y = "";
const output = document.querySelector("#outputNums");
const allNums = document.querySelectorAll("#nums");
const allOperators = document.querySelectorAll("#operators");
const equalBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const resetBtn = document.querySelector("#reset");

const resetAll = function () {
  totalActive = false;
  total = "";
  currentValue = "";
  currentOperator = "";
  x = "";
  y = "";
  output.innerText = "0";
};

for (let num of allNums) {
  num.addEventListener("click", function () {
    if (x === "" || currentOperator === "") {
      x += num.innerText;
      currentValue = x;
    }
    if (x !== "" && currentOperator) {
      y += num.innerText;
      currentValue = y;
    }
    output.innerText = currentValue;
    addPunctuation(outputNums.innerText);
  });
}

for (let operator of allOperators) {
  operator.addEventListener("click", function () {
    currentOperator = operator.innerText;
  });
}

deleteBtn.addEventListener("click", function () {
  if (currentValue !== "") {
    currentValue = currentValue.slice(0, -1);
    output.innerText = currentValue;
    addPunctuation(outputNums.innerText);
    if (currentValue === "") {
      currentValue = "0";
      output.innerText = currentValue;
    }
    if (x === "" || currentOperator === "") {
      x = currentValue;
    }
    if (x !== "" && currentOperator) {
      y = currentValue;
    }
  }
});

equalBtn.addEventListener("click", function () {
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
      case "x":
        total = x * y;
        break;
    }

    y = "";
    x = total;
    currentOperator = "";
    output.innerText = total;
    currentValue = "";
    addPunctuation(outputNums.innerText);
  }
});

resetBtn.addEventListener("click", function () {
  resetAll();
});
