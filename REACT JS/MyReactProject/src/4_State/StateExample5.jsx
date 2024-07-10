// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function StateExample5() {
    const [bgcolor,setBgcolor] = useState(0)

    const colorArray = ["blue","black","yellow","purple"];
    //   blue = colorArray[0]
    // 

    const handlerForRandomColor=()=>{
        const indexRandom = Math.floor(Math.random()*colorArray.length)
        console.log(indexRandom);
        setBgcolor(indexRandom)
    }
  return (
    // <div style="{{backgroundColor : "blue"}}"
    // colorArray[0]
    //  colorArray[bgcolor]
    
    <div style={{backgroundColor:colorArray[bgcolor],color:"white"}}>
      <h1>Hello</h1>

      <button onClick={handlerForRandomColor}>Random Color Change</button>
    </div>
  )
}
