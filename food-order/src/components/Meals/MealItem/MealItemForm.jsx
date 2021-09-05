import React, { useRef, useState } from 'react';
import Input from '../../Input/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm({ id, onAddToCart }) {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
    }
    onAddToCart(enteredAmountNumber);
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
      {!isValid && <p>Please Enter a Valid amount (1-5)</p>}
    </form>
  );
}
