import operation from './operate';

const calculate = (
  data = {},
  buttonName,
  clickEvent,
) => {
  const numbers = [...new Array(10).keys()];
  const operations = ['-', '+', 'X', '+/-', '%', '÷', '='];
  let state = { ...data };

  const setState = obj => {
    state = Object.assign(state, obj);
  };

  const handleClearInput = () => {
    setState({
      total: null,
      next: null,
      operate: null,
    });
  };

  const clearDisplay = () => {
    const { clear, next } = state;
    if (clear) {
      setState({
        next: null,
        clear: false,
      });
      return null;
    }

    return next;
  };

  const clearDisplayInTheNextInput = () => {
    const { next } = state;
    setState({
      next,
      clear: true,
    });
  };

  const handleNumberInput = buttonName => {
    let next = clearDisplay();
    next = `${next}`.replace(/null/g, '').concat(buttonName);
    if (next.length > 12) return;
    const newNext = next;
    setState({
      next: newNext,
    });
  };

  const sendToOperation = ({ total, next, operate }, buttonName) => {
    const operate2 = operate || buttonName;
    const result = operation(total, next, operate2);
    if (buttonName === '=') {
      setState({
        total: null,
        operate: null,
        next: result,
      });
      return;
    }
    setState({
      operate: buttonName,
      total: result,
      next: result,
    });
  };

  const convertToPercentage = ({ next }, buttonName) => {
    const result = operation(0, next, buttonName);
    setState({
      next: result,
    });
  };

  const convertToOppositeSign = ({ next }, buttonName) => {
    const result = operation(0, next, buttonName);
    setState({
      next: result,
    });
  };

  const handleOperationInput = buttonName => {
    const { total, next, operate } = state;
    if (next !== null && next.slice(0, 5) === 'error') return;
    if (buttonName === '+/-' && next !== null) {
      convertToOppositeSign({ next, operate }, buttonName);
      return;
    }
    clearDisplayInTheNextInput();
    if (operate === '÷' && next === '0' && total !== null) {
      setState({
        total: null,
        next: 'error: division by 0',
        operate: null,
      });
      return;
    }
    if (buttonName === '%' && next !== null) {
      convertToPercentage({ next, operate }, buttonName);
      return;
    }
    if (buttonName === '=') {
      if (total !== null && next !== null) {
        sendToOperation({ total, next, operate }, buttonName);
      }
      return;
    }
    if (total === null && next !== null) {
      setState({
        total: next,
        operate: buttonName,
      });
    } else if (next !== null) {
      sendToOperation({ total, next, operate }, buttonName);
    }
  };

  if (clickEvent) {
    clickEvent.preventDefault();
  }
  if (numbers.includes(parseInt(buttonName, 10)) || buttonName === '.') {
    handleNumberInput(buttonName);
  } else if (operations.includes(buttonName)) {
    handleOperationInput(buttonName);
  } else if (buttonName === 'AC') {
    handleClearInput();
  }

  return state;
};

export default calculate;
