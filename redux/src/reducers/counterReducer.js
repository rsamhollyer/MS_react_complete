export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DEFAULT = 'DEFAULT';

export const counterReducer = (state = { counter: 0 }, action) => {
  const actions = {
    INCREMENT: { counter: state.counter + 1 },
    DECREMENT: { counter: state.counter - 1 },
    DEFAULT: state,
  };

  return actions[action.type || 'DEFAULT'];
};
