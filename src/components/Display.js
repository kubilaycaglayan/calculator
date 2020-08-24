import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { next } = props;
  return (
    <div className="display">
      { next }
    </div>
  );
}

Display.defaultProps = {
  next: '0',
};

Display.propTypes = {
  next: PropTypes.string,
};
