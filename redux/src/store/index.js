// import { createStore } from 'redux';
// import { counterReducer } from '../reducers/counterReducer';

import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducers/counterReducer';

// const store = createStore(counterReducer);
const store = configureStore({
  //   reducer: { counter: counterSlice.reducer }, multiple reducer
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
