import React from 'react';
import Input from '../../Input/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm() {
  const inputObject = {
    id: 'amount',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };
  return (
    <form className={classes.form}>
      <Input label="Amount" input={inputObject} />
      <button type="submit">+ Add</button>
    </form>
  );
}
