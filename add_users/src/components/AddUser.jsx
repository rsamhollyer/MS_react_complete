import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

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
    <FormStyles>
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
    </FormStyles>
  );
}

const FormStyles = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    :focus {
      outline: none;
      border-color: #4f005f;
    }
  }
`;
