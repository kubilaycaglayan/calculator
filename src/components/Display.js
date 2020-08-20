import React from 'react';

export default function Display(props) {
  const props2 = { result: '0', ...props };
  return (
    <div>
      { props2.result }
    </div>
  );
}
