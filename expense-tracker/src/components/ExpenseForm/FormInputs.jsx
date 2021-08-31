import React, { useState } from 'react';

export default function FormInputs({ name, type, className }) {
  const [inputValue, setInputValue] = useState('');
  const changeHandler = e => {
    setInputValue(e.target.value);
  };
  if (type === 'number') {
    return (
      <div className={className}>
        <label htmlFor={name.toLowerCase()}>{name}</label>
        <input
          value={inputValue}
          id={name.toLowerCase()}
          type={type}
          onChange={changeHandler}
          min=".01"
          step=".01"
        />
      </div>
    );
  }
  if (type === 'date') {
    return (
      <div className={className}>
        <label htmlFor={name.toLowerCase()}>{name}</label>
        <input
          value={inputValue}
          id={name.toLowerCase()}
          type={type}
          onChange={changeHandler}
          min="2019-1-1"
          max="2022-12-31"
        />
      </div>
    );
  }
  return (
    <div className={className}>
      <label htmlFor={name.toLowerCase()}>{name}</label>
      <input
        value={inputValue}
        id={name.toLowerCase()}
        type={type}
        onChange={changeHandler}
      />
    </div>
  );
}
