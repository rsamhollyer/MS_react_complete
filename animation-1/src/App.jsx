import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      showBlock: false,
    };
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  /* To try and attain a cleaner DOM, we can try to conditionally render the components, but that does not let us keep the close modal animation because of the reactive nature of React.
  We need to use an outside package for this; enter react-transition-group */
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({
              showBlock: !prevState.showBlock,
            }))
          }
          type="button"
        >
          Toggle
        </button>
        <br />

        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => (
            <div
              style={{
                backgroundColor: 'red',
                width: '100px',
                height: '100px',
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            >
              Block
            </div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
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
