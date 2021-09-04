/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

const LOGGED_IN = 'LOGGED_IN';

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const loggedInInfo = localStorage.getItem('isLoggedIn');
    if (loggedInInfo === LOGGED_IN) {
      setIsLoggedIn(true);
    }
    return () => {};
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
