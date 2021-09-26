import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, TOGGLE } from '../reducers/counterReducer';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  const incrementHandler = (amount = 1) => {
    dispatch({ type: INCREMENT, value: amount });
  };

  const decrementHandler = (amount = 1) => {
    dispatch({ type: DECREMENT, value: amount });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button type="button" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={() => incrementHandler()} type="button">
          Increment
        </button>
        <button onClick={() => incrementHandler(5)} type="button">
          Increment by 5
        </button>
        <button onClick={() => decrementHandler()} type="button">
          Decrement
        </button>
      </div>
    </main>
  );
};

export default Counter;

// class CounterClass extends Component {
//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.INCREMENT();
//   };

//   decrementHandler() {
//     this.props.DECREMENT();
//   }

//   render() {
//     const { counter } = this.props;
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {counter} </div>
//         <div>
//           <button onClick={this.incrementHandler} type="button">
//             Increment
//           </button>
//           <button onClick={this.incrementHandler} type="button">
//             Increment by 5
//           </button>
//           <button onClick={this.decrementHandler.bind(this)} type="button">
//             Decrement
//           </button>
//         </div>
//         <button type="button" onClick={this.toggleCounterHandler}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = dispatch => ({
//   INCREMENT: () => dispatch({ type: INCREMENT }),
//   DECREMENT: () => dispatch({ type: DECREMENT }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
