// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function MyFunctionComponent2() {
  const subjectList = ["C","C++","Java","Python"];

  /*
    array.map((){
        print(...)
    })
  */
  return (
    <div>
      {subjectList.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
      })}
    </div>
  )
}
