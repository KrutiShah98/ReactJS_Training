/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample7() {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname]  = useState("");

    const [data,setData] = useState("");  

    const handleSubmit=()=>{
        setData(firstname + lastname);

        setFirstname("");
        setLastname("");
    }


  return (
    <div>
      <input type='text' value={firstname} placeholder='Enter firstname ' onChange={(e)=>setFirstname(e.target.value)} />
      <input type='text' value={lastname} placeholder='Enter lastname ' onChange={(e)=>setLastname(e.target.value)} />


      <button onClick={handleSubmit}>Submit</button>

      <h1>Hello, {data}</h1>
    </div>
  )
}

