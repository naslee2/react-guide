import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a cat</h1>
        <p>Cat is working</p>
        <Person name="Max" age="28"/>
        <Person name="Cat" age="29">My Hobbies: acting</Person>
        <Person name="Dog" age="12"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'cats work now'));
  }
}

export default App;
