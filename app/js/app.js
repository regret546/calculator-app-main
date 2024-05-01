const getElement = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

const previous = getElement("#previousNum");
const current = getElement("#currentNum");
const operator = getElement("#currentOperator");
const allNums = getAllElements("#nums");
const allOperators = getAllElements("#operators");
const equalBtn = getElement("#equals");
const deleteBtn = getElement("#delete");
const resetBtn = getElement("#reset");

let resolveIsActive = false;
let total = 0;
let previousNum = 0;
let currentNum = 0;
let currentOperator = "";

const reset = () => {
  total = 0;
  previousNum = 0;
  currentNum = 0;
  currentOperator = "";
  previous.textContent = "0";
  checkAlwaysTheValue();
};

const resolve = () => {
  if (currentOperator === "x") currentOperator = "*";

  const answer = eval(`${previousNum} ${currentOperator} ${currentNum}`);
  if (answer === 0) {
    previousNum = 0;
  } else if (answer.toString().length > 16) {
    alert("Maximum number reached, calculator will reset");
    reset();
    return;
  }

  resolveIsActive = true;
  previousNum = answer;
  currentNum = 0;
  currentOperator = "";
  previous.textContent = previousNum;
  checkAlwaysTheValue();
};

const checkAlwaysTheValue = () => {
  previous.textContent = previousNum || "0";
  current.textContent = currentNum || "";
  operator.textContent = currentOperator || "";

  if (previousNum.toString().length > 7 || currentNum.toString().length > 7) {
    alert("Maximum number reached, calculator will reset");
    reset();
  }
};

allNums.forEach((num) => {
  num.addEventListener("click", () => {
    if (resolveIsActive && !currentOperator) {
      resolveIsActive = false;
      reset();
    }

    if (previousNum === 0 || currentOperator === "") {
      previousNum = Number(`${previousNum}${num.textContent}`);
      previous.textContent = previousNum;
    }
    if (previousNum !== 0 && currentOperator) {
      currentNum = Number(`${currentNum}${num.textContent}`);
      current.textContent = currentNum;
    }
    checkAlwaysTheValue();
  });
});

allOperators.forEach((operators) => {
  operators.addEventListener("click", () => {
    checkAlwaysTheValue();
    if (currentOperator) {
      alert("You can't assign more than 1 operator!");
      return;
    }
    currentOperator = operators.textContent;
    operator.textContent = currentOperator;
  });
});

equalBtn.addEventListener("click", resolve);
resetBtn.addEventListener("click", reset);

deleteBtn.addEventListener("click", () => {
  if (previousNum && !currentOperator) {
    previousNum = parseInt(previousNum.toString().slice(0, -1)) || 0;
    previous.textContent = previousNum;
  }
  if (previousNum && currentOperator) {
    currentNum = parseInt(currentNum.toString().slice(0, -1)) || 0;
    current.textContent = currentNum;
  }
  if (isNaN(previousNum)) {
    previousNum = 0;
    previous.textContent = "0";
  }
  if (isNaN(currentNum)) {
    currentNum = 0;
    current.textContent = "0";
  }
  checkAlwaysTheValue();
});
