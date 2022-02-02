// Cached DOM Elements
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumberValue = (number) => {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? number : displayValue + number;
  }
};

const resetAll = () => {
  calculatorDisplay.textContent = '0';
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
};

const addDecimal = (decimal) => {
  const displayValue = calculatorDisplay.textContent;
  if (displayValue.includes('.')) return;
  calculatorDisplay.textContent = displayValue + decimal;
};

const useOperator = (operator) => {
  const currentValue = Number(calculatorDisplay.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  } else {
  }
  awaitingNextValue = true;
  operatorValue = operator;
};

// Event Listeners
inputBtns.forEach((inputBtn) => {
  // Number btns have no class
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => {
      sendNumberValue(inputBtn.value);
    });
  }

  if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  }

  if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal(inputBtn.value));
  }
});

clearBtn.addEventListener('click', resetAll);
