import React, { Component } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Restricted Rock Paper Scissors</h1>
        <h2>Text 312-470-6976 "p", "r", or "s" to use up a card. (e.g., "pr", "ss", etc.)</h2>
        <Timer endtime={new Date(Date.parse(new Date()) + 60 * 60 * 1000)}/>
        <br />
        <br />
        <Counter />
      </div>
    );
  }
}

export default App;
