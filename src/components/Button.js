import React from 'react';

export default function Button(props) {
  const props2 = { ...props };
  return (
    <button className={props2.className} type="button">
      { props2.name }
    </button>
  );
}
