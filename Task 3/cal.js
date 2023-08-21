const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';

digitButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput !== '') {
      currentInput += button.textContent;
      display.value = currentInput;
    }
  });
});

equalsButton.addEventListener('click', () => {
  if (currentInput !== '') {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = 'Error';
    }
  }
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});
