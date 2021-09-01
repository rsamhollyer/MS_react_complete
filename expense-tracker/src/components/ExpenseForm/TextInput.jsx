import React, { useState } from 'react';

export default function TextInput({ name, className, value, setInputValue }) {
  const changeHandler = e => {
    setInputValue(e.target.value);
  };
  return (
    <div className={className}>
      <label htmlFor={name.toLowerCase()}>{name}</label>
      <input
        value={value}
        id={name.toLowerCase()}
        type="text"
        onChange={changeHandler}
      />
    </div>
  );
}
