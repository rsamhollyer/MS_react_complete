import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';
import { updateUserPasswordUrl } from '../../utils/firebase-urls';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPWInput = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const submitHandler = e => {
    e.preventDefault();
    const newPassword = newPWInput.current.value;

    // Optional validation
    fetch(updateUserPasswordUrl, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      // Assume always succeeds\

      history.replace('/');
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPWInput} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
