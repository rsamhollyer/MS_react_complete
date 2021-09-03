import React from 'react';

import Card from './Card';
import classes from './styles/UsersList.module.css';

const UsersList = props => (
  <Card className={classes.users}>
    <ul>
      {props.users.map(user => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default UsersList;
