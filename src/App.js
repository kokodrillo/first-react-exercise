import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
 state = {
   username: ''
 }

inputChangedHandler = (event) => {
  this.setState({username: event.target.value})
}

render() {
  const style = {
    margin: "16px auto",
    border: "1px solid #eee",
    cursor: "pointer",
    boxshadow: "0 2px 3px #ccc",
    width: "300px",
    height: "350px",
    textAlign: "center",
    padding:"100px 50px ",
    backgroundColor: "rgb(179, 176, 176)",
    fontSize: "22px",
    color: "white",
    borderRadius: "10px",
  }

  return (
    <div style={style} className ="App">
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
