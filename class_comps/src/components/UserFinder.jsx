/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter(user =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, filteredUsers } = this.state;
    return (
      <>
        <div className={classes.finder}>
          <input
            value={searchTerm}
            type="search"
            onChange={this.searchChangeHandler}
          />
        </div>
        <Users users={filteredUsers} />
      </>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter(user => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </>
//   );
// };

export default UserFinder;
