/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample2() {
  const [name,setName] = useState("MERN");

  return (
    <div>
        <h1>{name}</h1>    
        <button onClick={()=> setName("My React Js")}>Change</button>
    </div>
  )
}
