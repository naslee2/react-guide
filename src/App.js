import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state = {
    persons: [
      {id:'qwefase', name: 'Bob', age: 28},
      {id:'x4f42gh', name:'Cat', age: 9},
      {id:'afw4hj6', name:'Dog', age:6}
    ],
  otherState: 'some other value',
  showPersons: false
  };


  nameChangedHandler =(event, id) =>{
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    } //Just like with the array it's also available for objects and it will distribute all the properties of the object we fetch here into this new object we're creating here.
    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})

  };

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //alternative using ES6
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
  let persons = null;
  let btnClass = '';

  if (this.state.showPersons) {
    persons = (

      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
          <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)}/>
          </ErrorBoundary>
          // with that person wrapped with error boundary, we also have to move the key here to the error boundary
          // because this is now the outer element which we map and the key always has to be on the outer element
        })}
      </div> 
    );
    btnClass = classes.Red;
  }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
      
      <div className={classes.App}>
        <h1>Hi, I am a cat</h1>
        <p className={assignedClasses.join(' ')}>Cat is working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button> 
      {persons}
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'cats work now'));
  }
}

export default App;
