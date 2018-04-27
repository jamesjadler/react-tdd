import React, { Component } from 'react';
import PersonAdd from "./Components/PersonAdd";

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
            showAdd: !prevState.showAdd
        }));
    }


  render() {
    return (
      <div className="App">
        <button className="addPerson" onClick={()=>{this.toggle()}}>Add Person</button>
          {this.state.showAdd===true?<PersonAdd/>:''}
      </div>
    );
  }
}