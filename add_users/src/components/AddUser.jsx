import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';
import classes from './styles/AddUser.module.css';

export default function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (parseInt(userAge) < 1) {
      return;
    }
    onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  };

  const nameChangeHandler = e => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = e => {
    setUserAge(e.target.value);
  };

  return (
    <>
      <ErrorModal title="Stuff" message="Junk" />
      <Card className={classes.input}>
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
    </>
  );
}
