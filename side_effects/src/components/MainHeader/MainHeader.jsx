import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

export default function MainHeader({ isAuthenticated, onLogout }) {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
}
