/* eslint-disable react/button-has-type */
import React from 'react';

import classes from './styles/Button.module.css';

const Button = props => (
  <button
    className={classes.button}
    type={props.type || 'button'}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
