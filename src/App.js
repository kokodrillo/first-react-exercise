import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
 state = {
   username: 'Majajam'}
  }

inputChangedHandler = (event) => {
  this.setState({username: event.target.value})

}



render(){
  return (
    <div className ="App">
    < UserOutput userName={this.state.username}/>

    < UserInput />

    </div>
  );
}
}

export default App;
