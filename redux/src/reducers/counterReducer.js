import { createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE = 'TOGGLE';
// const DEFAULT = 'DEFAULT';

const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    INCREMENT(state, action) {
      state.counter += action.payload; // It looks like we're changing the state, but toolkit overwrites the state immutably.
    },
    DECREMENT(state, action) {
      state.counter -= action.payload;
    },
    TOGGLE(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
// export const counterReducer = (state = initialState, action) => {
//   const actions = {
//     INCREMENT: { ...state, counter: state.counter + action.value },
//     DECREMENT: { ...state, counter: state.counter - action.value },
//     TOGGLE: { ...state, showCounter: !state.showCounter },
//     DEFAULT: state,
//   };
//   return actions[action.type] || actions[DEFAULT];
// };
