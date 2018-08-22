import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
// import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state ={
      persons: [
        {id:'qwefase', name: 'Bob', age: 28},
        {id:'x4f42gh', name:'Cat', age: 9},
        {id:'afw4hj6', name:'Dog', age:6}
      ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount')
  }

//   shouldComponentUpdate(nextProps,nextState){
//     console.log('[UPDATE App.js] Inside shouldComponentUpdate',nextProps, nextState);
//     return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
// }

  componentWillUpdate(nextProps,nextState){
      console.log('[UPDATE App.js] Inside componentWillUpdate',nextProps, nextState);
  }

  componentDidUpdate(){
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

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
    this.setState((prevState,props) => {
      return {
        showPersons: !doesShow, toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  render() {
  console.log('[App.js] inside render()')
  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
        <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler}/>
      </div> 
    );
  }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit 
        appTitle={this.props.title} //from index.js
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
      {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'cats work now'));
  }
}

export default withClass(App, classes.App);
