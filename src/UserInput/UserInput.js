import React from 'react'

const userInput = (props) => {
  return(
  <div>
  <input type = "text" onChange={props.changed}
                        value={props.newName}/>
  </div>
  )
}

export default userInput
