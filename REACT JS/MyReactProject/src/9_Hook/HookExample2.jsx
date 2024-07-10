/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function HookExample2() {
 
 const [count,setCount]  = useState(0);
 const [num,setNum] = useState(0);

  useEffect(()=>{
        console.log("UseEffect calling - it will call only count state change");

  },[count])
  return (
    <div>
        <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setCount(count+1)}>Click Here for Count</button>
        <button onClick={()=>setNum(num+1)}>Click Here for Num</button>
    </div>
  )
}
