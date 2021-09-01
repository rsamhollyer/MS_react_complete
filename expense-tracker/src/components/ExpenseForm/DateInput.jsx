import React from 'react';

export default function DateInput({
  name,
  className,
  min,
  max,
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
        type="date"
        onChange={changeHandler}
        min={min}
        max={max}
      />
    </div>
  );
}
