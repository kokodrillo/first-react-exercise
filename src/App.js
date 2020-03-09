import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

function App() {
 // state = {
 //    users: [
 //      { username: 'Majajam'},
 //      { username: 'Nikola'},
 //      { username: 'Anjaa'}
 //    ]
 //  }


  return (
    <div className ="App">
    <UserOutput/>
    <UserInput/>

    </div>
  );
}

export default App;
