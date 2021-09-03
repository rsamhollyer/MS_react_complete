import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';
import classes from './styles/AddUser.module.css';

export default function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = e => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a username and an age',
      });
      return;
    }

    if (parseInt(userAge) < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a positive integer for age',
      });
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
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
