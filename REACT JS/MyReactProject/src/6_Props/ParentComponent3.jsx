/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent3 from './ChildComponent3';

export default function ParentComponent3() {
    const handleClick=()=>{
        alert("Hello Users !");
    }

  return (
    <div>
        <button onClick={handleClick}>Click Here - Parent Component</button> 
        <ChildComponent3 myfun={handleClick} /> 
    </div>
  )
}
