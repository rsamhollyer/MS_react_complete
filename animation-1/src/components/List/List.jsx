/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3],
    };
  }

  addItemHandler = () => {
    this.setState(prevState => ({
      items: prevState.items.concat(prevState.items.length + 1),
    }));
  };

  removeItemHandler = selIndex => {
    this.setState(prevState => ({
      items: prevState.items.filter((item, index) => index !== selIndex),
    }));
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <CSSTransition key={index} classNames="fade" timeout={300}>
        <li
          className="ListItem"
          onMouseDown={() => this.removeItemHandler(index)}
        >
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button type="button" className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
