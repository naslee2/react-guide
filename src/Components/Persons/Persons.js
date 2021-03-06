import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log('[persons.js] inside constructor', props);
    };
      
    componentWillMount(){
        console.log('[persons.js] Inside componentWillMount()');
    }
    
    componentDidMount(){
        console.log('[persons.js] inside componentDidmount')
    }
    
    componentWillReceiveProps(nextProps){
        console.log("[UPDATE person.js] Inside componentWillReceiveProps");
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate',nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps,nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate',nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }


    render() {
        console.log('[Persons.js] inside render()')
        return this.props.persons.map((person, index) => {
            return <Person 
            click={() => this.props.clicked(index)} 
            name={person.name} 
            poition = {index}
            age={person.age} 
            key={person.id} 
            changed={(event) => this.props.changed(event, person.id)}/>
           });

        
    }
}
export default Persons;
