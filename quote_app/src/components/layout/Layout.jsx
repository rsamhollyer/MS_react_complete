import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}
