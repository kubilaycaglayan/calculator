import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    color, wide, name, className,
  } = props;
  const style = {};

  function handleClick(buttonName, event) {
    return props.clickHandler(buttonName, event);
  }

  style.width = wide ? '50%' : '';
  style.backgroundColor = (color ? '' : 'orange');

  return (
    <button className={className} onClick={event => { handleClick(name, event); }} style={style} type="button">
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: false,
  className: '',
};
