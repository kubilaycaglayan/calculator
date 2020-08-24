const handleButtons = (event, callback) => {
  let buttonName = event.key;
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
