/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent1 from './ChildComponent1'

export default function ParentComponent1() {
  return (
    <div>
        {/* here, name is a property (Prop) and MyReact is a value */}
                        {/* key = value   e.g language = 'javascript' */}
        <ChildComponent1 name="React Js" language="Javascript" />
    </div>
  )
}

