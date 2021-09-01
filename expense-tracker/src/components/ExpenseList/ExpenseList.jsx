import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear() === parseInt(filteredYear)
  );

  const renderContent = () =>
    // Check for filtered array length

    filteredExpenses.length > 0 ? (
      // If it has content, return the JSX component
      filteredExpenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} date={date} amount={amount} />
      ))
    ) : (
      // If not just return a JSX p tag
      <p>No Expenses Found</p>
    );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {renderContent()}
      </Card>
    </div>
  );
}
