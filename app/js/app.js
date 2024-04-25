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

let total = "'";
let previousNum = "";
let currentNum = "";
let currentOperator = "";

const reset = () => {
  [total, previousNum, currentNum, currentOperator] = ["", "", "", ""];
  previous.innerText = "0";
};

const resolve = () => {
  if (currentOperator === "x") currentOperator = "*";
  const answer = eval(`${previousNum}${currentOperator}${currentNum}`);
  [previousNum, currentNum, currentOperator] = [answer, "", ""];
  previous.innerText = previousNum;
  checkAlwaysTheValue();
};

const checkAlwaysTheValue = () => {
  previous.textContent = previousNum === "" ? "0" : previousNum;
  current.innerText = currentNum === "" ? "" : currentNum;
  operator.innerText = currentOperator === "" ? "" : currentOperator;
};

allNums.forEach((num) =>
  num.addEventListener("click", () => {
    try {
      if (!previousNum || !currentOperator) {
        previousNum +=
          num.innerText === "." ? (previousNum ? "" : "0.") : num.innerText;
        previous.innerText = previousNum;
      } else {
        currentNum +=
          num.innerText === "." ? (currentNum ? "" : "0.") : num.innerText;
        current.innerText = currentNum;
      }
    } catch (e) {
      alert("Error, Please click reset button");
      console.log(e);
    }
  })
);

allOperators.forEach((operators) =>
  operators.addEventListener("click", () => {
    checkAlwaysTheValue();
    currentOperator = operators.innerText;
    operator.innerText = currentOperator;
  })
);

equalBtn.addEventListener("click", resolve);

resetBtn.addEventListener("click", reset);

deleteBtn.addEventListener("click", () => {
  if (previousNum && !currentOperator) {
    previousNum = parseInt(previousNum.toString().slice(0, -1));
    previous.innerText = previousNum || "0";
  }
  if (previousNum && currentOperator) {
    currentNum = parseInt(currentNum.toString().slice(0, -1));
    current.innerText = currentNum || "0";
  }
  if (isNaN(previousNum)) [previousNum, previous.innerText] = ["", "0"];
  if (isNaN(currentNum)) [currentNum, current.innerText] = ["", "0"];
  checkAlwaysTheValue();
});
