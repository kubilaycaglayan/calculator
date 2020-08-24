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
    };
    this.numbers = [...new Array(10).keys()];
    this.operations = ['-', '+', 'X', '+/-', '%', '÷', '='];
  }

  handleClearInput() {
    this.setState({
      total: null,
      next: null,
      operate: null,
    })
  }

  handleNumberInput(buttonName) {
    const { next } = this.state;
    const newNext = `${next}`.replace(/null/g, '').concat(buttonName);
    this.setState({
      next: newNext,
    });
  }

  calculate({ total, next, operate }, buttonName) {
    const result = calculate({ total, next, operate }, buttonName);
    this.setState({
      total: result.toPrecision(),
      next: result.toPrecision(),
    });
  }

  handleOperationInput(buttonName) {
    const { total, next, operate } = this.state;
    if (buttonName === '=' && total !== null && next !== null) {
      this.calculate({ total, next, operate }, operate);
      return;
    }
    if (total === null) {
      this.setState({
        total: next,
        next: null,
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
    setTimeout(() => {
      console.log(this.state);
    }, 0);
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
