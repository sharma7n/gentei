import React, { Component } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Restricted Rock Paper Scissors</h2>
        <Timer endtime={new Date(Date.parse(new Date()) + 60 * 60 * 1000)}/>
        <br />
        <br />
        <Counter />
      </div>
    );
  }
}

export default App;
