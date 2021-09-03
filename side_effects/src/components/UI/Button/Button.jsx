import React from 'react';

import classes from './Button.module.css';

export default function Button({
  type,
  onClick,
  disabled,
  className,
  children,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
