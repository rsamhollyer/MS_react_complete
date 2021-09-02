/* eslint-disable react/button-has-type */
import React from 'react';

import './Button.css';

const Button = ({ type, children, onClick }) => (
  <button type={type} className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
