import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operate: null,
      clear: false,
    };
    this.numbers = [...new Array(10).keys()];
    this.operations = ['-', '+', 'X', '+/-', '%', '÷', '='];
    window.addEventListener('keydown', this.handleButtons.bind(this));
  }

  handleClearInput() {
    this.setState({
      total: null,
      next: null,
      operate: null,
    });
  }

  clearDisplay() {
    const { clear, next } = this.state;
    if (clear) {
      this.setState({
        next: null,
        clear: false,
      });
      return null;
    }

    return next;
  }

  clearDisplayInTheNextInput() {
    this.setState({
      clear: true,
    });
  }

  handleNumberInput(buttonName) {
    const next = this.clearDisplay();
    const newNext = `${next}`.replace(/null/g, '').concat(buttonName);
    this.setState({
      next: newNext,
    });
  }

  convertToPercentage() {
    const { next } = this.state;
    this.setState({
      next: (next / 100).toString(),
    });
  }

  convertToOppositeSign({ total, next, operate }, buttonName) {
    const result = calculate({ total, next, operate }, buttonName);
    this.setState({
      next: result.toPrecision(),
    });
  }

  calculate({ total, next, operate }, buttonName) {
    const result = calculate({ total, next, operate }, operate);
    if (buttonName === '=') {
      this.setState({
        total: null,
        next: result.toPrecision(),
        operate: null,
      });
      return;
    }
    this.setState({
      total: result.toPrecision(),
      next: result.toPrecision(),
    });
  }

  handleOperationInput(buttonName) {
    this.clearDisplayInTheNextInput();
    const { total, next, operate } = this.state;
    if (buttonName === '+/-') {
      this.convertToOppositeSign({ total, next, operate }, buttonName);
      return;
    }
    if (buttonName === '%') {
      this.convertToPercentage();
      return;
    }
    if (buttonName === '=') {
      if (total !== null && next !== null) {
        this.calculate({ total, next, operate }, buttonName);
      }
      return;
    }
    if (total === null) {
      this.setState({
        total: next,
        operate: buttonName,
      });
    } else {
      this.calculate({ total, next, operate }, buttonName);
    }
  }

  handleClick(buttonName) {
    if (this.numbers.includes(parseInt(buttonName, 10)) || buttonName === '.') {
      this.handleNumberInput(buttonName);
    } else if (this.operations.includes(buttonName)) {
      this.handleOperationInput(buttonName);
    } else if (buttonName === 'AC') {
      this.handleClearInput();
    }
  }

  handleButtons(event) {
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
    this.handleClick(buttonName);
  }

  render() {
    let { next } = this.state;
    if (next === null) {
      next = '0';
    }
    return (
      <div id="app">
        <Display next={next} />
        <ButtonPanel clickHandler={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
