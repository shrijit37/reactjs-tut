import React from 'react'

const ObjectMaping = () => {
    const usersInfo = [
            {
              username: "HuXn",
              email: "test@gmail.com",
              location: "USA",
            },
            {
              username: "John",
              email: "jd@gmail.com",
              location: "Arab",
            },
            {
              username: "Alex",
              email: "alexmersion@gmail.com",
              location: "India",
            },
          ];
  return (
   <>
    <div>
        {usersInfo.map((user)=>{
            return (
                <>
                <hr />
                <h1>Name : {user.username}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Location : {user.location}</h1>
                <hr />
                </>
            )
        })}
    </div>
    </>
  )
}

export default ObjectMaping