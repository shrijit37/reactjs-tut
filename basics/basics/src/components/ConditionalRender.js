import React from 'react'

const ConditionalRender = () => {
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid})=>{
    return isValid ? <ValidPassword /> : <InvalidPassword />;
}
  return (
    <Password isValid={true}/>
  )
}

export default ConditionalRender