import React from 'react';

export default function Display(props = { result: '0' }) {
  return (
    <div>
      {props.result}
    </div>
  );
}
