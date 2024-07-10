/* eslint-disable no-unused-vars */
import React from 'react'

export default function JsxExample2() {
    const status = true;

  return (
    <div>
       {/* && : logical And operator  */}

       {status && <h1>Hello User !</h1> }

        {/* status && <h1>Hello</h1>   it will return error */}
    </div>
  )
}
