import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
 state = {
   username: 'Majajam'
 }


inputChangedHandler = (event) => {
  this.setState({username: event.target.value})
}

render() {
  return (
    <div className ="App">
      < UserOutput
          userName={this.state.username}/>

      < UserInput
          changed={this.inputChangedHandler}
          currentName={this.state.username}/>
    </div>
    );
  }
}

export default App;
