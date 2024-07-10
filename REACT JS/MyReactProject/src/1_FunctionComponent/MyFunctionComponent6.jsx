// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function MyFunctionComponent6() 
{
  const data = ["Java","Flutter","React"];
  return (
    <div>
            <table>
                <tbody>
                    <tr>
                        {data.map((e,i)=>{
                            return <td key={i}>{e}</td>
                        })}
                    </tr>
                </tbody>
            </table>      
    </div>
  )
}
