import React from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem({ title, amount, date }) {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <Card className="expense-item">
      {date && <ExpenseDate date={date} />}
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={handleClick} type="button">
        Change Title
      </button>
    </Card>
  );
}
