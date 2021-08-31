import React from 'react';
import FormInputs from './FormInputs';
import './expenseForm.css';

export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <FormInputs className="new-expense__control" name="Title" type="text" />
        <FormInputs
          className="new-expense__control"
          name="Amount"
          type="number"
        />
        <FormInputs className="new-expense__control" name="Date" type="date" />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
