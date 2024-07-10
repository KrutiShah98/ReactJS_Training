/* eslint-disable no-unused-vars */
import React from 'react'
import StyleComponentExample1 from './StyleComponentExample1'
import StyleComponentExample2 from './StyleComponentExample2'
import StyleComponentExample3 from './StyleComponentExample3'

export default function AllStyleExample() {
  return (
    <div>
        {/* inline css- style example */}
            {/* <StyleComponentExample1/> */}

        {/* internal css - style */}
            {/* <StyleComponentExample2/> */}

        {/* External css - style */}
            <StyleComponentExample3/>
    </div>
  )
}
