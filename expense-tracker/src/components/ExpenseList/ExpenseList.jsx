import React from 'react';
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList({ expenses }) {
  return (
    <Card className="expenses">
      {expenses &&
        expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} date={date} amount={amount} />
        ))}
    </Card>
  );
}
