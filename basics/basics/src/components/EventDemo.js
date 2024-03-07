import React from 'react'

const EventDemo = () => {
    const handleClick = () => {
        console.log('clicked');
    }
  return (
    <button onClick={handleClick}>Click me!!</button>
  )
}

export default EventDemo