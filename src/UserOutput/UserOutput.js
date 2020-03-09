import React from 'react'


const userOutput = (props) => {
return (
  <div>
    <p> please write down your username</p>
    <p> your username is: {props.userName}</p>
  </div>
)
};

export default userOutput
