import React from 'react'
import './App.css'
import {useState} from 'react'

const App = () => {
  const [count,setCount] = useState(0);

  return (
    <>
    <h1 className='number'>{count}</h1>
    <div className="btn-container"> 
     <button className="increment" onClick={()=>setCount(count+1)}>+</button>
    <button className ="increment" onClick={()=>setCount(count-1)}>-</button>
    </div>
    <footer className='sign'>.
      <h1>Designed and Developed by Shrijit Srivastav.</h1>
    </footer>
    </>
  )
}

export default App