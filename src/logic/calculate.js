const calculate = (
  data = {
    total: '',
    next: '',
    operation: '',
  },
  buttonName,
) => {
  let result;
  const { total, next } = data;

  switch (buttonName) {
    case '+':
      result = total + next;
      break;
    case '-':
      result = total - next;
      break;
    case 'X':
      result = total * next;
      break;
    case '÷':
      result = total / next;
      break;
    default:
      break;
  }

  return result;
};

export default calculate;
