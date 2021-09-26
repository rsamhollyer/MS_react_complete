import { createSlice } from '@reduxjs/toolkit';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = { isAuth: false };

export const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    LOGIN(state) {
      state.isAuth = true;
    },
    LOGOUT(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
