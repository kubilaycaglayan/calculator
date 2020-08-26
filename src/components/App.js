import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default function App() {
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}
