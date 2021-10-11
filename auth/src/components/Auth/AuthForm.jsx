import React, { useRef, useState } from 'react';
import classes from './AuthForm.module.css';

// eslint-disable-next-line no-undef
const { SNOWPACK_PUBLIC_WEB_API_KEY } = __SNOWPACK_ENV__;
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = e => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional formValidation
    setIsLoading(true);
    if (isLogin) {
      console.log('Hi');
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${SNOWPACK_PUBLIC_WEB_API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: String(enteredEmail),
            password: String(enteredPassword),
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(res => {
        setIsLoading(false);
        if (res.ok) {
          // ...
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication Failed';
            errorMessage = data?.error?.message;
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          )}
          {isLoading && <p>Loading....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
