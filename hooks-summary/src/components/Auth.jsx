import React, { useContext } from 'react';

import Card from './UI/Card';
import './Auth.css';
import { AuthContext } from '../context';

const Auth = () => {
  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    authCtx.login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button type="button" onClick={loginHandler}>
          Log In
        </button>
      </Card>
    </div>
  );
};

export default Auth;
