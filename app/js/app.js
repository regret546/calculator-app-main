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

let isFromResolve = false;
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
  current.innerText = "";
  operator.innerText = "";
};

const resolve = function () {
  if (currentOperator === "x") {
    currentOperator = "*";
  }
  const answer = eval(previousNum + currentOperator + currentNum).toString();
  if (answer === 0) {
    previousNum = "";
  } else if (answer.length > 50) {
    alert("Answer reach maximun of numbers, calculator will reset");
    reset();
    checkAlwaysTheValue();
    return;
  }
  isFromResolve = true;
  previousNum = answer;
  currentNum = "";
  currentOperator = "";
  previous.innerText = getDisplayNumber(previousNum);
  checkAlwaysTheValue();
};

const checkAlwaysTheValue = function () {
  if (previousNum === "") {
    previous.textContent = "0";
  }
  if (currentNum === "") {
    current.innerText = "";
  }

  if (currentOperator === "") {
    operator.innerText = "";
  } else {
    operator.innerText = currentOperator;
  }
};

function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = parseFloat(stringNumber.split(".")[1]);
  let finalDecimalDigitsNumber = String(decimalDigits).substring(0, 5);
  let intergerDisplay;
  if (isNaN(integerDigits)) {
    intergerDisplay = "";
  } else {
    intergerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits) {
    return `${intergerDisplay}.${finalDecimalDigitsNumber}`;
  } else if (number.includes(".") && !decimalDigits) {
    return `${intergerDisplay}.`;
  } else {
    return intergerDisplay;
  }
}

allNums.forEach((num) => {
  num.addEventListener("click", function () {
    if (isFromResolve && !currentOperator) {
      reset();
      isFromResolve = false;
    } else {
      isFromResolve = false;
    }

    if (previousNum === "" || currentOperator === "") {
      if (num.innerText === "." && previousNum.includes(".")) {
        return;
      } else {
        previousNum += num.innerText;
        previous.innerText = getDisplayNumber(previousNum);
      }
    }
    if (previousNum !== "" && currentOperator) {
      if (num.innerText === "." && currentNum.includes(".")) {
        return;
      } else {
        currentNum += num.innerText;
        current.innerText = getDisplayNumber(currentNum);
      }
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
  if (isNaN(previousNum) || isNaN(currentNum)) {
    previousNum = 0;
    currentNum = "";
  }
  checkAlwaysTheValue();
});
