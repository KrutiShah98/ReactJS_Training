/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent7 from './ChildComponent7';

export default function ParentComponent7() {
    const products = [
        {id : 1 , name : "AAA" , subject : "Node"},
        {id : 2 , name : "BBB" , subject : "Flutter"},
        {id : 3 , name : "CCC" , subject : "React"},
    ];

  return (
    <div>
            <ChildComponent7 products = {products}></ChildComponent7>
    </div>
  )
}
