/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

export default function ChildComponent1(props) {
  return (
    <div>
        <h1>Hello  {props.name}</h1>
        <h2>Language = {props.language}</h2>
    </div>
  )
}
