import React from 'react'

const ListDemo = () => {
    const fruits = ['apple', 'orange', 'banana', 'grapes'];
  return (
    <>
    {/* to add jsx within javascript */}

    {fruits.map(fruit => {
       return(<ul>
            <li>{fruit}</li>
        </ul>)
    })}
    
    </>
  )
}

export default ListDemo