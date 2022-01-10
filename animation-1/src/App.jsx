import React, { Component } from 'react';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  /* To try and attain a cleaner DOM, we can try to conditionally render the components, but that does not let us keep the close modal animation because of the reactive nature of React */
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen ? (
          <>
            <Modal show={this.state.modalIsOpen} closed={this.closeModal} />{' '}
            <Backdrop show={this.state.modalIsOpen} />
          </>
        ) : null}
        <button type="button" className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
