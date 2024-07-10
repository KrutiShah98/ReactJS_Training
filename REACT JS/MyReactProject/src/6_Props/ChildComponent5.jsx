/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ChildComponent5(props) {
  return (
    <div>   
        <h1>{props.subject}</h1>
        <h1>{props.city}</h1>
    </div>
  )
}
ChildComponent5.defaultProps = {
    subject : "REACT JS",
    city : "Ahmedabad"
}