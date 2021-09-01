import React, { useState } from 'react';
import DateInput from './DateInput';
import './expenseForm.css';
import NumberInput from './NumberInput';
import TextInput from './TextInput';
import ToggleForm from './ToggleForm';

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [numberInput, setNumberInput] = useState('');

  const clearForm = () => {
    setTextInput('');
    setDateInput('');
    setNumberInput('');
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: textInput,
      amount: parseFloat(numberInput),
      date: new Date(dateInput),
    };
    onSaveExpenseData(expenseData);
    clearForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <TextInput
          className="new-expense__control"
          name="Title"
          value={textInput}
          setInputValue={setTextInput}
        />
        <NumberInput
          className="new-expense__control"
          name="Amount"
          min=".01"
          step=".01"
          value={numberInput}
          setInputValue={setNumberInput}
        />
        <DateInput
          className="new-expense__control"
          name="Date"
          min="2019-01-01"
          max="2022-12-31"
          value={dateInput}
          setInputValue={setDateInput}
        />
      </div>

      <div className="new-expense__actions">
        <button
          type="button"
          onClick={() => {
            onCancel(false);
            clearForm();
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
/*
setUserInput((prevState)=>{
  return {...prevState,enteredTitle:e.target.value};
})
 - This approach gives you the latest state snapshot and is the better way because it depends on the previous state.

*/
