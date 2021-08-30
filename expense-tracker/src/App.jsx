import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
