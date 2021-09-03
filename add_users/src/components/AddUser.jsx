import React, { useRef, useState } from 'react';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';
import classes from './styles/AddUser.module.css';

export default function AddUser({ onAddUser }) {
  const [error, setError] = useState(null);
  const nameInput = useRef();
  const ageInput = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredAge = ageInput.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a username and an age',
      });
      return;
    }

    if (parseInt(enteredAge) < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a positive integer for age',
      });
      return;
    }
    onAddUser(enteredName, enteredAge);
    // It's not best practice to manipulate the DOM directly, like below, but this is one of those instances where it can be used to by pass having state re-render your app.
    nameInput.current.value = '';
    ageInput.current.value = '';
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
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
