import React, { PropTypes } from 'react';

const Input = ({ value, placeholder, updateText }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={event => updateText(event)}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  updateText: PropTypes.func.isRequired
};

Input.defaultProps = {
  placeholder: ''
};

export default Input;