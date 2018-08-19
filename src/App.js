import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Bob', age: 28},
      {name:'Cat', age: 9},
      {name:'Dog', age:6}
    ],
  otherState: 'some other value',
  showPersons: false
  };

  switchNameHandler = (NewName) => {
    //console.log("was clicked")
    //this.state.persons[0].name = 'Sandwich'// never do this
    this.setState({persons: [
      {name: NewName, age: 28},
      {name:'Manu', age: 11},
      {name:'Stephanie', age:27}
    ] })
  };

  nameChangedHandler =(event) =>{
    this.setState({
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 11},
      {name:'Pusheen', age:27}
    ] })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>Hi, I am a cat</h1>
        <p>Cat is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {
          this.state.showPersons === true ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'Baxter')} changed={this.nameChangedHandler}>My Hobbies: acting</Person>

              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> :null
        }

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'cats work now'));
  }
}

export default App;
