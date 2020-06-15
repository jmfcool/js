import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div onClick={this.props.onClick}>This has been clicked {this.props.clicks} times!</div>
    );
  }
}

export default App;
