/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function StateExample9() {

  const [myArray,setMyArray] = useState([]); // blank array initlization 
  const [subject,setSubject] = useState("");

  const handleSubmit=()=>{
    setMyArray([...myArray,subject])
    setSubject("");

  }

  const specificClick=(item)=>{
    console.log(item);
  }
  return (
    <div>
        <input type='text' placeholder='Enter subject' value={subject} onChange={(e)=> setSubject(e?.target?.value)} />
        <button onClick={handleSubmit}>Add</button>
        <br></br>

        {
            myArray.map((item,i)=>{
                return <h3 key={i}>{item}</h3>
            })
        }

    </div>
  )
}
