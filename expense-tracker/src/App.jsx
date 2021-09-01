import React from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './utils/initialData';

export default function App() {
  const addExpenseHandler = expense => {
    console.log(expense);
  };

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
