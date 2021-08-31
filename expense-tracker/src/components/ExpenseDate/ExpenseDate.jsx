import React from 'react';
import './ExpenseDate.css';
import convertDate from '../../utils/convertDate';

export default function ExpenseDate({ date }) {
  const [month, day, year] = convertDate(date);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
