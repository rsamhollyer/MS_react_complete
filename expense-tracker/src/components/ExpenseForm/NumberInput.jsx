import React from 'react';

export default function NumberInput({
  name,
  className,
  min,
  step,
  value,
  setInputValue,
}) {
  const changeHandler = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor={name.toLowerCase()}>{name}</label>
      <input
        value={value}
        id={name.toLowerCase()}
        type="number"
        onChange={changeHandler}
        min={min}
        step={step}
      />
    </div>
  );
}
