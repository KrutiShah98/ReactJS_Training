// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function StyleComponentExample2() {
    // internal css example

    const myStyle = {
        myContainer :{
            backgroundColor : "gray",
            color : "white",
            height : "150px"
        },
        myHeading : {
            backgroundColor : "black",
            color:"white"
        }
    }
  return (
    <div style={myStyle.myContainer}>
        <h1 style={myStyle.myHeading}>Hello</h1>
    </div>
  )
}
