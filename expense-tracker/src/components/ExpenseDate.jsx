import React from 'react';
import convertDate from '../utils/convertDate';

export default function ExpenseDate({ date }) {
  const [month, day, year] = convertDate(date);
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
