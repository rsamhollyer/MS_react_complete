import React, { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log('User Will Unmount');
  }

  render() {
    const { name } = this.props;
    return <li className={classes.user}>{name}</li>;
  }
}
// const User = (props) => <li className={classes.user}>{props.name}</li>;

export default User;
