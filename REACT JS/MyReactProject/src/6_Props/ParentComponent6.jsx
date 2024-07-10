/* eslint-disable no-unused-vars */
import React from 'react'
import ChildComponent6 from './ChildComponent6';

export default function ParentComponent6() {
    const myProducts = ["C","C++","Java","Python"] ; // array 
  return (
    <div>
        {/*Note :  key is inbuilt prop in react js we can take it as a custom prop */}
        <ChildComponent6 products={myProducts}></ChildComponent6>
    </div>
  )
}
