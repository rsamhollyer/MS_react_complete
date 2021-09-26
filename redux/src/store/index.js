// import { createStore } from 'redux';
// import { counterReducer } from '../reducers/counterReducer';

import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducers/counterReducer';
import { authSlice } from '../reducers/loginReducer';

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, isAuth: authSlice.reducer },
});

export default store;
