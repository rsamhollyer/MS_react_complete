import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem({ title, amount, date }) {
  const [stateTitle, setStateTitle] = useState(title);

  const handleClick = () => {
    setStateTitle('Updated');
  };

  return (
    <li>
      <Card className="expense-item">
        {date && <ExpenseDate date={date} />}
        <div className="expense-item__description">
          <h2>{stateTitle}</h2>
        </div>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleClick} type="button">
          Change Title
        </button>
      </Card>
    </li>
  );
}
