/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample8() {
  const [number,setNumber] = useState(0);
  const [fact,setFactorial] = useState(0);
  let f = 1 

  const findFactorial=(e)=>{
    setNumber(parseInt(e?.target?.value));
  }

  const factorialValue=()=>
  {
    for(let i = 1;i <= number;i++)
    {
      f*=i;
      
    }
    setFactorial(f);
  }

  return (
    <div>
      {/* <input type='text' placeholder='Enter a number : '  onChange={(e)=> setNumber(e?.target?.value)}/> */}
      <input type='text' placeholder='Enter a number : '  onChange={(e)=>findFactorial(e)}/>
      <button onClick={factorialValue}>Calculate</button>
      {/* {number} */}
      {fact}
    </div>
  )
}
