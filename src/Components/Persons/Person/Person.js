import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';


class Person extends Component {
    constructor(props){
        super(props);
        console.log('[persons.js] inside constructor', props);
    };
      
    
    componentWillMount(){
        console.log('[persons.js] Inside componentWillMoint()');
    }
    
    componentDidMount(){
        console.log('[persons.js] inside Componentdidmount')
        if (this.props.position === 0){
            this.inputElement.focus();
        }

    }

    render(){
        console.log('[Person.js] inside render()');
        return (
            <Aux className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                ref = {(inp) => {this.inputElement = inp}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
        )

        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);