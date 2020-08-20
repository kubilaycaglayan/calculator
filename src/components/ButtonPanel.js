import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div>
        <Button color="gray" name="AC" />
        <Button color="gray" name="+/-" />
        <Button color="gray" name="%" />
        <Button name="÷" />
      </div>
      <div>
        <Button color="gray" name="7" />
        <Button color="gray" name="8" />
        <Button color="gray" name="9" />
        <Button name="X" />
      </div>
      <div>
        <Button color="gray" name="4" />
        <Button color="gray" name="5" />
        <Button color="gray" name="6" />
        <Button name="-" />
      </div>
      <div>
        <Button color="gray" name="1" />
        <Button color="gray" name="2" />
        <Button color="gray" name="3" />
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
