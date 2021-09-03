import React from 'react';

export default function AddUser() {
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
