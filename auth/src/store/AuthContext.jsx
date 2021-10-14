import React, { createContext, useState } from 'react';

const initialData = {
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
};

export const AuthContext = createContext(initialData);

export default function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = someToken => {
    setToken(someToken);
    localStorage.setItem('token', someToken);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
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
