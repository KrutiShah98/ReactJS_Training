/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent6(props) {
  return (
    <div>
       {props.products.map((e,i)=>{
            return <h3 key={i}>{e}</h3>
       })}
    </div>
  )
}
