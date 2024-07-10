/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample4() {
 const [isVisible,setVisible] = useState(false);

//  const handleButton=()=>{
//     // if(isVisible)
//     // {
//     //     setVisible(false)
//     // }
//     // else
//     // {
//     //     setVisible(true)
//     // }
//     setVisible(!isVisible)
//  }
  return (
    <div>
        {
            isVisible 
            ? 
            
                <h1>Hello i am visible</h1>     
            :
                <h2> h1 is now hidden </h2>
        }
        
    
        <button onClick={()=> setVisible(!isVisible)}>Change</button>
    </div>
  )
}
