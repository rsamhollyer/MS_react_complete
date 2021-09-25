import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../reducers/counterReducer';
import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);
//   const toggleCounterHandler = () => {};

//   const incrementHandler = () => {
//     dispatch({ type: INCREMENT });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: DECREMENT });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {counter} </div>
//       <div>
//         <button onClick={incrementHandler} type="button">
//           Increment
//         </button>
//         <button onClick={decrementHandler} type="button">
//           Decrement
//         </button>
//       </div>
//       <button type="button" onClick={toggleCounterHandler}>
//         Toggle Counter
//       </button>
//     </main>
//   );
// };

class CounterClass extends Component {
  toggleCounterHandler = () => {};

  incrementHandler = () => {
    this.props.INCREMENT();
  };

  decrementHandler() {
    this.props.DECREMENT();
  }

  render() {
    const { counter } = this.props;
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {counter} </div>
        <div>
          <button onClick={this.incrementHandler} type="button">
            Increment
          </button>
          <button onClick={this.decrementHandler.bind(this)} type="button">
            Decrement
          </button>
        </div>
        <button type="button" onClick={this.toggleCounterHandler}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  INCREMENT: () => dispatch({ type: INCREMENT }),
  DECREMENT: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
