import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { clickHandler } = props;
  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      <div>
        <Button clickHandler={handleClick} color name="AC" />
        <Button clickHandler={handleClick} color name="+/-" />
        <Button clickHandler={handleClick} color name="%" />
        <Button clickHandler={handleClick} name="÷" />
      </div>
      <div>
        <Button clickHandler={handleClick} color name="7" />
        <Button clickHandler={handleClick} color name="8" />
        <Button clickHandler={handleClick} color name="9" />
        <Button clickHandler={handleClick} name="X" />
      </div>
      <div>
        <Button clickHandler={handleClick} color name="4" />
        <Button clickHandler={handleClick} color name="5" />
        <Button clickHandler={handleClick} color name="6" />
        <Button clickHandler={handleClick} name="-" />
      </div>
      <div>
        <Button clickHandler={handleClick} color name="1" />
        <Button clickHandler={handleClick} color name="2" />
        <Button clickHandler={handleClick} color name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div>
        <Button clickHandler={handleClick} color wide name="0" />
        <Button clickHandler={handleClick} color name="." />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
