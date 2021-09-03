import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers(prevState => [
      ...prevState,
      { name, age, id: Math.random().toString() },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={users} />
      </header>
    </div>
  );
}

export default App;
