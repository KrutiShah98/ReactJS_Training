// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function StateExample3() {
    const [bgcolor,setBgcolor] = useState("white")

  return (
    <div style={{backgroundColor:bgcolor}}>
        <h1>Hello</h1>

        <button onClick={()=> setBgcolor("blue")}>Change Color</button>
    </div>
  )
}
