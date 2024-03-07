import React from 'react'

const User = (props) => {
  return (
    <section>
        <h1>Name : {props.name}</h1>
        <h3>Hobbies : {props.hobbies}</h3>
        <h4>Age : {props.age}</h4>
        {props.Children}
    </section>
  )
}

export default User