import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={() => props.setCount((count) => count + 1)}>
          count is {props.count}
        </button>
    </div>
  )
}

export default Button