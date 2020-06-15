import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<h1 style={{margin:'1em'}}>Hello at {this.props.now}</h1>);
  }
}

export default App;
