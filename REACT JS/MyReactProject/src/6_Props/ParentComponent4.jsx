/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChildComponent4 from './ChildComponent4';

export default function ParentComponent4() {
    const [isLoggin,setLogin] = useState(false);
    const [msg,setMessage] = useState("MY REACT MSG");

    const handleClick=()=>{
        console.log("Clickeddd");
        console.log(isLoggin);
        setLogin(!isLoggin)
    }
  return (
    <div>
        <button onClick={handleClick}>Click Here</button>  
        {
            isLoggin && <ChildComponent4 msg={msg} /> 
        }
        
    </div>
  )
}
