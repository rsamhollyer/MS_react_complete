import React, { useState } from 'react';
import Button from './Button';

import Card from './Card';

export default function AddUser() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(null);

  const submitHandler = e => {
    e.preventDefault();
  };

  const nameChangeHandler = e => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = e => {
    setUserAge(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          value={userName}
          id="username"
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={userAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
          min="1"
          step="1"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
