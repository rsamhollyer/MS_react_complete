import redux from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  const actions = {
    INCREMENT: { counter: state.counter + 1 },
    DECREMENT: { counter: state.counter - 1 },
    DEFAULT: state,
  };
  //   switch (action.type) {
  //     case 'INCREMENT': {
  //       return { counter: state.counter + 1 };
  //     }
  //     case 'DECREMENT': {
  //       return { counter: state.counter - 1 };
  //     }
  //     default:
  //       return state;
  //   }
  return actions[action.type || 'DEFAULT'];
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: '' });
