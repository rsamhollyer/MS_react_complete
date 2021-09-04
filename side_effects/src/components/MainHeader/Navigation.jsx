import React, { useContext } from 'react';
import AuthContext from '../context/auth-context';
import Button from '../UI/Button/Button';

import classes from './Navigation.module.css';

export default function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <Button onClick={authContext.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
