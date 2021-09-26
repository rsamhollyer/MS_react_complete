import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../reducers/loginReducer';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth.isAuth);

  const logout = () => {
    dispatch(authActions.LOGOUT());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
