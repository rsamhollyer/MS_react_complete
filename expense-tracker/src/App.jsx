import React from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

export default function App() {
  const addExpenseHandler = expense => {
    console.log(expense);
  };

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Flat TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
}
/* Older React - What JSX looks like under the hood
return React.createElement(
  'div',
  { class: 'App' },
  React.createElement(
    'header',
    { class: 'App-header' },
    React.createElement(ExpenseList, { expenses })
  )
);
*/
