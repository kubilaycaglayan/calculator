import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import handleButtons from '../events/keyboard';
import convert from '../helpers/convert';
import Signature from './Signature';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operate: null,
      clear: false,
    };

    this.handleClick = this.handleClick.bind(this);
    window.addEventListener('keydown', event => { handleButtons(event, this.handleClick); });
  }

  handleClick(buttonName, clickEvent = false) {
    const data = this.state;
    const newState = calculate(data, buttonName, clickEvent);
    this.setState(newState);
  }

  render() {
    const { total, next, operate } = convert(this.state);
    return (
      <div id="app">
        <Display next={next} total={total} operate={operate} />
        <ButtonPanel clickHandler={this.handleClick} />
        <Signature />
      </div>
    );
  }
}

export default App;
