const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
