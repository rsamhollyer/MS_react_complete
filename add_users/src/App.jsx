import React from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddUser />
        <UsersList users={[]} />
      </header>
    </div>
  );
}

export default App;
