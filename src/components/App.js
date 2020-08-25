import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import handleButtons from '../events/keyboard';
import convert from '../helpers/convert';

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
    this.handleClick = this.handleClick.bind(this);
    window.addEventListener('keydown', event => { handleButtons(event, this.handleClick); });
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
    const { next } = this.state;
    this.setState({
      next,
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

  convertToPercentage({ next, operate }, buttonName) {
    const result = calculate({ total: 0, next, operate }, buttonName);
    this.setState({
      next: result,
    });
  }

  convertToOppositeSign({ next, operate }, buttonName) {
    const result = calculate({ total: 0, next, operate }, buttonName);
    this.setState({
      next: result,
    });
  }

  calculate({ total, next, operate }, buttonName) {
    const result = calculate({ total, next, operate }, operate);
    if (buttonName === '=') {
      this.setState({
        total: null,
        operate: null,
        next: result,
      });
      return;
    }
    this.setState({
      operate: buttonName,
      total: result,
      next: result,
    });
  }

  handleOperationInput(buttonName) {
    const { total, next, operate } = this.state;
    if (next !== null && next.slice(0, 5) === 'error') return;
    if (buttonName === '+/-' && next !== null) {
      this.convertToOppositeSign({ next, operate }, buttonName);
      return;
    }
    this.clearDisplayInTheNextInput();
    if (operate === '÷' && next === '0' && total !== null) {
      this.setState({
        total: null,
        next: 'error: division by 0',
        operate: null,
      });
      return;
    }
    if (buttonName === '%' && next !== null) {
      this.convertToPercentage({ next, operate }, buttonName);
      return;
    }
    if (buttonName === '=') {
      if (total !== null && next !== null) {
        this.calculate({ total, next, operate }, buttonName);
      }
      return;
    }
    if (total === null && next !== null) {
      this.setState({
        total: next,
        operate: buttonName,
      });
    } else if (next !== null) {
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

  render() {
    const { total, next, operate } = convert(this.state);
    return (
      <div id="app">
        <Display next={next} total={total} operate={operate} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
