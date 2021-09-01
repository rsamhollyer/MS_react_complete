import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
