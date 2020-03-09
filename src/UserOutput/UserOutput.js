import React from 'react'


const userOutput = (props) => {
return (
  <div>
    <p> please write down your username</p>
    <p> your username is: <strong>{props.userName}</strong></p>
  </div>
)
};

export default userOutput
