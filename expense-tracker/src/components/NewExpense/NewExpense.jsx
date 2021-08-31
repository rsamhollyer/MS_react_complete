import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './newExpense.css';

export default function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
