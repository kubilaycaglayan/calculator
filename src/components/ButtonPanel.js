import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div>
        <Button color="true" name="AC" />
        <Button color="true" name="+/-" />
        <Button color="true" name="%" />
        <Button name="÷" />
      </div>
      <div>
        <Button color="true" name="7" />
        <Button color="true" name="8" />
        <Button color="true" name="9" />
        <Button name="X" />
      </div>
      <div>
        <Button color="true" name="4" />
        <Button color="true" name="5" />
        <Button color="true" name="6" />
        <Button name="-" />
      </div>
      <div>
        <Button color="true" name="1" />
        <Button color="true" name="2" />
        <Button color="true" name="3" />
        <Button name="+" />
      </div>
      <div>
        <Button color="true" wide="true" name="0" />
        <Button color="true" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
