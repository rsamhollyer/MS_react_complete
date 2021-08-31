import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      {date && <ExpenseDate date={date} />}
      <div className="expense-item__description">
        <h2>{title || null}</h2>
      </div>
      <div className="expense-item__price">${amount || null}</div>
    </div>
  );
}
