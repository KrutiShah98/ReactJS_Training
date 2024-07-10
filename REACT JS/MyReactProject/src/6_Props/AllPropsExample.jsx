/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ParentComponent1 from './ParentComponent1'
import ParentComponent2 from './ParentComponent2'
import ParentComponent3 from './ParentComponent3'
import ParentComponent4 from './ParentComponent4'
import ParentComponent5 from './ParentComponent5'
import ParentComponent6 from './ParentComponent6'
import ParentComponent7 from './ParentComponent7'
import ChildComponentClassExample8 from './ChildComponentClassExample8'
import ParentComponentClassExample8 from './ParentComponentClassExample8'
import ParentComponentClassExample9 from './ParentComponentClassExample9'

export default function AllPropsExample() {
  return (
    <div>
        {/* pass single or multiple variable one component to other component */}
            {/* <ParentComponent1/> */}
        
        {/* send multiline code or content to child */}
            {/* <ParentComponent2/> */}

        {/* transfer method or function to child component */}
            {/* <ParentComponent3/> */}

        {/* Conditional Rendering */}
            {/* <ParentComponent4/> */}

        {/* default Prop Component  */}
            {/* <ParentComponent5/> */}

        {/* send array to child Component */}
            {/* <ParentComponent6/> */}

        {/* Complex props send array - object to child Componnet */}
            {/* <ParentComponent7/> */}

        {/* class Component example */}
            {/* <ParentComponentClassExample8/> */}

        {/* class method prop example  */}
            <ParentComponentClassExample9/>
    </div>
  )
}
