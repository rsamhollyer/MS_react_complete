/* eslint-disable react/button-has-type */
import React from 'react';

import classes from './Button.module.css';

const Button = ({ type, onClick, className, disabled, children }) => (
  <button
    type={type || 'button'}
    className={`${classes.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
