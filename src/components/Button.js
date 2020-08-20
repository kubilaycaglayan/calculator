import React from 'react';

export default function Button(props) {
  props = { color: false, wide: false, ...props };
  props.style = {};

  (function isWide() {
    if (props.wide) {
      props.style.width = "50%";
    }
  })();

  (function isOrange() {
    if(!props.color) {
      props.style.backgroundColor = "orange";
    }
  })();

  return (
    <button style={props.style} className={props.className} type="button">
      { props.name }
    </button>
  );
}
