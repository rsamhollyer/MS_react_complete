import React, { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = props => {
  const taskInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value.toString();

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button type="submit">{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
