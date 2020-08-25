import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { total, next, operate } = props;
  return (
    <div>
      <div className="operation">
        <div className="total">
          { total }
          72
        </div>
        <div className="operate">
          { operate }
          +
        </div>
      </div>
      <div className="display">
        { next }
      </div>
    </div>
  );
}

Display.defaultProps = {
  total: '',
  next: '0',
  operate: '',
};

Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
  operate: PropTypes.string,
};
