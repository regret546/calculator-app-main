const previous = document.querySelector("#previousNum");
const current = document.querySelector("#currentNum");
const operator = document.querySelector("#currentOperator");
const allNums = document.querySelectorAll("#nums");
const allOperators = document.querySelectorAll("#operators");
const equalBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const resetBtn = document.querySelector("#reset");

let total = "'";
let previousNum = "";
let currentNum = "";
let currentOperator = "";

const checkAlwaysTheValue = function () {
  // If currentNum is empty, display 0
  if (previousNum === "") {
    previous.textContent = "0";
  }
  // If previousNum is empty, hide previous display
  if (currentNum === "") {
    current.style.display = "none";
  } else {
    // Otherwise, show previous display
    current.style.display = "block";
  }

  // If currentOperator is empty, hide operator display
  if (currentOperator === "") {
    operator.style.display = "none";
  } else {
    // Otherwise, show operator display
    operator.style.display = "block";
  }
};

allNums.forEach((num) => {
  num.addEventListener("click", function () {
    checkAlwaysTheValue();
    if (currentNum === "" || currentOperator === "") {
      currentNum += num.innerText;
      current.innerText = currentNum;
    }
    if (currentNum !== "" && currentOperator) {
      previousNum += num.innerText;
      previous.innerText = previousNum;
    }
  });
});

allOperators.forEach((operators) => {
  operators.addEventListener("click", function () {
    checkAlwaysTheValue();
    currentOperator = operators.innerText;
    operator.innerText = currentOperator;
  });
});

/* const resolve = function () {
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



resetBtn.addEventListener("click", function () {
  reset();
});

equalBtn.addEventListener("click", function () {
  resolve();
});

deleteBtn.addEventListener("click", function () {
  if (x !== "" && !currentOperator) {
    xCurrentValue = x.toString();
    x = parseInt(xCurrentValue.slice(0, -1));
    output.innerText = x;
  }
  if (x && currentOperator) {
    yCurrentValue = y.toString();
    y = parseInt(yCurrentValue.slice(0, -1));
    output.innerText = y;
  }

});
 */

checkAlwaysTheValue();
