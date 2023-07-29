const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function evaluateExpression() {
  const expression = display.value;
  let result;

  try {
    result = eval(expression);
    if (isNaN(result)) {
      display.value = 'Invalid Expression';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Invalid Expression';
  }
}

