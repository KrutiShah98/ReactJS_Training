// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function JsxExample1() {
    const subject = "Javascript"; // js code 

    const greetingMessage = <p>Good Morning</p>;

  return (
    <div>
    <h1>My Fav. Programing Language {subject}</h1>   {/* html code */}

    {greetingMessage}                                       

    </div>
  )
}
