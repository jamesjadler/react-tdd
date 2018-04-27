import React, { Component } from 'react';
import PersonAdd from "./Components/PersonAdd";
import PersonList from "./Components/PersonList";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'Alan', lastName: 'Turing' },
        { firstName: 'Alanzo', lastName: 'Church' },
        { firstName: 'Grace', lastName: 'Hopper' }
      ],
        showAdd:false
    };
  }


    toggle = () => {
        this.setState((prevState) => ({
            ...prevState,
            showAdd: !prevState.showAdd
        }));
    }

    addPerson = ({firstName, lastName}) => {
        this.setState((prevState) => ({
            ...prevState,
            showAdd: false,
            people: [...prevState.people,
                {firstName: firstName, lastName: lastName}
                ]
        }));
    }


  render() {
    return (
      <div className="App">
        <button className="addPerson" onClick={()=>{this.toggle()}}>Add Person</button>
          {this.state.showAdd===true?<PersonAdd addPerson={this.addPerson}/>:''}
          <PersonList people = {this.state.people}/>
      </div>
    );
  }
}