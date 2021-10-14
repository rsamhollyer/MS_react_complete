import React, { createContext, useState } from 'react';

const initialData = {
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
};

const calculateRemainingTime = expirationTime => {
  const currentTime = new Date().getTime();
  const adjustedTime = new Date(expirationTime).getTime();
  const remainingTime = adjustedTime - currentTime;

  return remainingTime;
};

export const AuthContext = createContext(initialData);

export default function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (someToken, expireAt) => {
    setToken(someToken);
    localStorage.setItem('token', someToken);
    const expirationTime = calculateRemainingTime(expireAt);

    setTimeout(logoutHandler, expirationTime);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
