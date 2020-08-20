import React from 'react';

export default function Button(props) {
  const props2 = { ...props };
  return (
    <button type="button">
      { props2.name }
    </button>
  );
}
