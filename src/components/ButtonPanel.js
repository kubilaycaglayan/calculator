import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  function handleClick(buttonName) {
    return this.props.clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      <div>
        <Button clickHandler={handleClick} color="true" name="AC" />
        <Button clickHandler={handleClick} color="true" name="+/-" />
        <Button clickHandler={handleClick} color="true" name="%" />
        <Button clickHandler={handleClick} name="÷" />
      </div>
      <div>
        <Button clickHandler={handleClick} color="true" name="7" />
        <Button clickHandler={handleClick} color="true" name="8" />
        <Button clickHandler={handleClick} color="true" name="9" />
        <Button clickHandler={handleClick} name="X" />
      </div>
      <div>
        <Button clickHandler={handleClick} color="true" name="4" />
        <Button clickHandler={handleClick} color="true" name="5" />
        <Button clickHandler={handleClick} color="true" name="6" />
        <Button clickHandler={handleClick} name="-" />
      </div>
      <div>
        <Button clickHandler={handleClick} color="true" name="1" />
        <Button clickHandler={handleClick} color="true" name="2" />
        <Button clickHandler={handleClick} color="true" name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div>
        <Button color="true" wide="true" name="0" />
        <Button color="true" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
