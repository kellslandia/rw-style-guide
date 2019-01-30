import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import './baseStyles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main">
          <h2>This is text</h2>
          <h3>This is text</h3>
          <h5>This is text</h5>
          <p>This is text</p>
        </div>

        <div className="Main">
          <div className="primarybox"></div>
          <div className="secondarybox"></div>
        </div>
      </div>
    );
  }
}

export default App;
