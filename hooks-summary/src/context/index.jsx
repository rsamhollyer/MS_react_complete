/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ login: loginHandler, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
