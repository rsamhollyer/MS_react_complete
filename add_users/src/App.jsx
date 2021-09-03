import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers(prevState => [
      ...prevState,
      { name, age, id: Math.random().toString() },
    ]);
  };

  return (
    <main className="App-header">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </main>
  );
}
