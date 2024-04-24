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

const reset = function () {
  total = "";
  previousNum = "";
  currentNum = "";
  currentOperator = "";
  output.innerText = "0";
};

const resolve = function () {
  try {
    answer = eval(`${previousNum}${currentOperator}${currentNum}`);
    previousNum = answer;
    currentNum = "";
    currentOperator = "";
    previous.innerText = previousNum;
    checkAlwaysTheValue();
  } catch (e) {
    currentNum = "";
    currentOperator = "";
    previous.innerText = "error";
  }
};

const checkAlwaysTheValue = function () {
  if (previousNum === "") {
    previous.textContent = "0";
  }

  if (previousNum !== "") {
    previous.textContent = previousNum;
  }

  if (currentNum === "") {
    current.innerText = "";
  }
  if (currentOperator === "") {
    operator.innerText = "";
  }
};

allNums.forEach((num) => {
  num.addEventListener("click", function () {
    if (previousNum === "" || currentOperator === "") {
      previousNum += num.innerText;
      previous.innerText = previousNum;
    }
    if (previousNum !== "" && currentOperator) {
      currentNum += num.innerText;
      current.innerText = currentNum;
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

equalBtn.addEventListener("click", function () {
  resolve();
});

resetBtn.addEventListener("click", function () {
  reset();
});

/* deleteBtn.addEventListener("click", function () {
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
}); */
