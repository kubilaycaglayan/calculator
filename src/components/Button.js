import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { color, wide, name } = props;
  const style = {};

  (function isWide() {
    if (wide) {
      style.width = '50%';
    }
  }());

  (function isOrange() {
    if (!color) {
      style.backgroundColor = 'orange';
    }
  }());

  return (
    <button style={style} type="button">
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: false,
};
