import React, { useRef } from 'react';
import Input from '../../Input/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm({ id }) {
  const amountInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = parseFloat(amountInputRef.current.value);
  };

  const inputObject = {
    id: `amount_${id}`,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputObject} ref={amountInputRef} />
      <button type="submit">+ Add</button>
    </form>
  );
}
