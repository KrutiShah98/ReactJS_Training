/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function HookExample3() {
    const [data,setData] = useState(0);

    useEffect(()=>{
        console.log("UseEffect called");
    },[]) // it invoke once in a program before intilization 
  return (
    <div>
        {data}
        <button onClick={()=> setData(data+1)}>Click Here</button>
    </div>
  )
}
