const getElement = function (selector) {
  return document.querySelector(selector);
};

const getAllElements = function (selector) {
  return document.querySelectorAll(selector);
};

const previous = getElement("#previousNum");
const current = getElement("#currentNum");
const operator = getElement("#currentOperator");
const allNums = getAllElements("#nums");
const allOperators = getAllElements("#operators");
const equalBtn = getElement("#equals");
const deleteBtn = getElement("#delete");
const resetBtn = getElement("#reset");

let resolveIsActive = false;
let total = "'";
let previousNum = "";
let currentNum = "";
let currentOperator = "";

const reset = function () {
  total = "";
  previousNum = "";
  currentNum = "";
  currentOperator = "";
  previous.innerText = "0";
  checkAlwaysTheValue();
};

const resolve = function () {
  if (currentOperator === "x") {
    currentOperator = "*";
  }
  const answer = eval(previousNum + currentOperator + currentNum);
  if (answer === 0) {
    previousNum = "";
  } else if (answer.length > 16) {
    alert("Maximum number reach, calculator will reset");
    reset();
    checkAlwaysTheValue();
    return;
  }
  resolveIsActive = true;
  previousNum = answer;
  currentNum = "";
  currentOperator = "";
  previous.innerText = previousNum;
  checkAlwaysTheValue();
};

const checkAlwaysTheValue = function () {
  if (previousNum === "") {
    previous.textContent = "0";
  } else {
    previous.textContent = previousNum;
  }
  if (currentNum === "") {
    current.innerText = "";
  } else {
    current.innerText = currentNum;
  }
  if (currentOperator === "") {
    operator.innerText = "";
  } else {
    operator.innerText = currentOperator;
  }
  if (previousNum.length > 7 || currentNum.length > 7) {
    alert("Maximum number reach, calculator will reset");
    reset();
    return;
  }
};

allNums.forEach((num) => {
  num.addEventListener("click", function () {
    if (resolveIsActive && !currentOperator) {
      resolveIsActive = false;
      reset();
    }

    if (previousNum === "" || currentOperator === "") {
      previousNum += num.innerText;
      previous.innerText = previousNum;
    }
    if (previousNum !== "" && currentOperator) {
      currentNum += num.innerText;
      current.innerText = currentNum;
    }
    checkAlwaysTheValue();
  });
});

allOperators.forEach(function (operators) {
  operators.addEventListener("click", function () {
    checkAlwaysTheValue();
    if (currentOperator) {
      alert("You can't assign morethan 1 operator!");
      return;
    }
    currentOperator = operators.innerText;
    operator.innerText = currentOperator;
  });
});

equalBtn.addEventListener("click", resolve);

resetBtn.addEventListener("click", reset);

deleteBtn.addEventListener("click", function () {
  if (previousNum && !currentOperator) {
    previousNum = parseInt(previousNum.toString().slice(0, -1));
    previous.innerText = previousNum || "0";
  }
  if (previousNum && currentOperator) {
    currentNum = parseInt(currentNum.toString().slice(0, -1));
    current.innerText = currentNum || "0";
  }
  if (isNaN(previousNum)) {
    previousNum = "";
    previous.innerText = "0";
  }
  if (isNaN(currentNum)) {
    currentNum = "";
    current.innerText = "0";
  }
  checkAlwaysTheValue();
});
