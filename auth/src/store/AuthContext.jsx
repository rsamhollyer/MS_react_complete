import React, { createContext, useState } from 'react';

const initialData = {
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
};

export const AuthContext = createContext(initialData);

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = someToken => {
    setToken(someToken);
  };
  const logoutHandler = () => {
    setToken(null);
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
