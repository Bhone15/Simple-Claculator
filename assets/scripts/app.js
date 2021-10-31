const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  if (userInput.value === "") {
    return 0;
  }
  return parseFloat(userInput.value);
}

function clearDataFromInput() {
  userInput.value = "";
}

function createAndWriteOutput(operator, resultBeforCal, calcNumber) {
  const calcDescription = `${resultBeforCal} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
  clearDataFromInput();
}

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUB" &&
    calculationType !== "MUL" &&
    calculationType !== "DIV"
  )
    return;

  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  switch (calculationType) {
    case "ADD":
      currentResult += enteredNumber;
      mathOperator = "+";
      break;
    case "SUB":
      currentResult -= enteredNumber;
      mathOperator = "-";
      break;
    case "MUL":
      currentResult *= enteredNumber;
      mathOperator = "*";
      break;
    case "DIV":
      if (enteredNumber === 0) {
        const errorMsg = "We are not allowed to divided by with 0";
        outputResult(0, errorMsg);
        clearDataFromInput();
        return;
      }
      currentResult /= enteredNumber;
      mathOperator = "/";
      break;
    default:
      break;
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUB");
}

function multiply() {
  calculateResult("MUL");
}

function divide() {
  calculateResult("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
