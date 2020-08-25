const handleButtons = (event, callback) => {
  event.preventDefault();
  let buttonName = event.key;
  if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Enter', '/', '*', ',', 'Backspace', '+', '-'].includes(buttonName)) return;
  switch (buttonName) {
    case 'Enter':
      buttonName = '=';
      break;
    case '/':
      buttonName = '÷';
      break;
    case '*':
      buttonName = 'X';
      break;
    case ',':
      buttonName = '.';
      break;
    case 'Backspace':
      buttonName = 'AC';
      break;
    default:
      break;
  }
  callback(buttonName);
};

export default handleButtons;
