const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  const negativeOne = new Big(-1);
  const hundred = new Big(100);
  let result;

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '%':
      result = num2.div(hundred);
      break;
    case '+/-':
      result = num2.times(negativeOne);
      break;
    default:
      break;
  }

  return result.toPrecision();
};

export { operate as default };
