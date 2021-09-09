import React, { Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary.jsx';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState(curState => ({
        filteredUsers: this.context.users.filter(user =>
          user.name.includes(curState.searchTerm)
        ),
      }));
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
        <ErrorBoundary>
          <Users users={filteredUsers} />
        </ErrorBoundary>
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
