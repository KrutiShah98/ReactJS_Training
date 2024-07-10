/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ClassComponentExample1 from './ClassComponentExample1'
import ClassComponentExample2 from './ClassComponentExample2'
import ClassComponentExample3 from './ClassComponentExample3'
import ClassComponentExample4 from './ClassComponentExample4'

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        {/* simple class component  */}
          {/* <ClassComponentExample1/> */}
        {/* variable state example */}
          {/* <ClassComponentExample2/> */}
        {/* counter increment - decrement example */}
          {/* <ClassComponentExample3/> */}
        {/* conditional renderning  */}
          <ClassComponentExample4/>
      </div>
    )
  }
}
