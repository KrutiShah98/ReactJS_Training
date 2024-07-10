// eslint-disable-next-line no-unused-vars
import React from 'react'
import MyFunctionComponent3 from './MyFunctionComponent3';

export default function MyFunctionComponent4() {
    const l1 = [1,2,3,4,5];

  return (
    <div>
        {
            l1.map((e,i)=>{
                return <MyFunctionComponent3 key={i} />;
            })
        }   
    </div>
  )
}
