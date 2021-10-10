import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink selected activeClassName={styles.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={styles.active} to="/new-quote">
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
