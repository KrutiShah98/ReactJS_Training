/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ChildComponentClassExample9 extends Component {
  render() {
    const {myfun,subject} = this.props;
    return (
      <div>
            <button onClick={myfun}>Click Here - Child Component</button>
            <h3>Subject = {subject}</h3>
      </div>
    )
  }
}
