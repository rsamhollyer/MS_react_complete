import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink selected activeClassName={classes.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
