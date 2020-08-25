import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { color, wide, name } = props;
  const style = {};

  style.width = wide ? '50%' : '';
  style.backgroundColor = (color === 'orange' ? 'orange' : '');

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
  color: 'orange',
};
