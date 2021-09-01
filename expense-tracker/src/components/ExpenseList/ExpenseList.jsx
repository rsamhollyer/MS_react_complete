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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} date={date} amount={amount} />
          ))}
      </Card>
    </div>
  );
}
