import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList({ filteredExpenses }) {
  const renderContent = () =>
    // Check for filtered array length
    filteredExpenses.length > 0 ? (
      // If it has content, return the JSX component
      filteredExpenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} date={date} amount={amount} />
      ))
    ) : (
      // If not just return a JSX p tag
      <li className="expenses-list__fallback">No Expenses Found</li>
    );

  return <ul className="expenses-list">{renderContent()}</ul>;
}
