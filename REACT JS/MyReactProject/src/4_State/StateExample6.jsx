/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample6() {
    const [username,setUsername] = useState("");
    const [data,setData] = useState("");

    const handleSubmit=()=>{
        setData(username)
        setUsername("")
    }
  return (
    <div>
        <input type='text' placeholder='Enter your username' value={username} onChange={(e)=> setUsername(e.target.value)} />  
        <h1>{data}</h1>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
