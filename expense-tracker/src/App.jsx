import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import dummyExpenses from './utils/initialData';

export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
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
    React.createElement(Expenses, { expenses })
  )
);
*/
