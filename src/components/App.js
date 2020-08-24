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
  }

  handleClick(buttonName) {
    const { total, next, operate } = this.state;
    console.log('clicked ', total, next, operate, buttonName);
  }

  render() {
    const { next } = this.state;
    return (
      <div id="app">
        <Display next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
