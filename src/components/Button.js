import React from 'react'

function Button(props) {
  console.log(props);
  return (
    <div>
      <button>{props.label}</button>
    </div>
  )
}
export default Button
