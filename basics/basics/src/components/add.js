import React from 'react'


const add = () => {
let a;
let b;
function add(x,y){
    a=x;
    b=y;
    return a+b;
}
add(1,2);
  return (
    <div><h1>{a} + {b} = {add(a,b)}</h1></div>
    
  )
}

export default add