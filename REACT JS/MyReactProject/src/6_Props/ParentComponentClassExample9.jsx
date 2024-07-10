/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ChildComponentClassExample9 from './ChildComponentClassExample9';

export default class ParentComponentClassExample9 extends Component {
    handleClick=()=>{
        alert("Clicked by user");
            
    }
  
    render() {

    return (
      <div>
        <button onClick={this.handleClick}>Click Here</button>
        <ChildComponentClassExample9 myfun={this.handleClick} subject="React Js"></ChildComponentClassExample9>
      </div>
    )
  }
}
