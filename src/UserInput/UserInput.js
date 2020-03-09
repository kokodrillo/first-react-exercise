import React from 'react'
import './UserInput.css'

const userInput = (props) => {
  return(
  <div >
  <input type = "text" className="Input"
        onChange={props.changed}
        value={props.newName}/>
  </div>
  )
}

export default userInput
