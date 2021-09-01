import React, { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ToggleForm from '../ExpenseForm/ToggleForm';
import './newExpense.css';

export default function NewExpense({ onAddExpense }) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ToggleForm showForm={showForm} setShowForm={setShowForm}>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={setShowForm}
        />
      </ToggleForm>
    </div>
  );
}
