import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { total, next, operate } = props;
  return (
    <div className="display">
      <div className="operation">
        <div className="total">
          { total }
        </div>
        <div className="operate">
          { operate }
        </div>
      </div>
      <div className="result">
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
