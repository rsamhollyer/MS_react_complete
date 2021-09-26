// import { createStore } from 'redux';
// import { counterReducer } from '../reducers/counterReducer';

import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from '../reducers/counterReducer';
import { authReducers } from '../reducers/loginReducer';

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducers, isAuth: authReducers },
});

export default store;
