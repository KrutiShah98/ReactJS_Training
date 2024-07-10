/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentExample2 extends Component {
    constructor(){
        super(); // we are calling parent class (Component) constructor 
        this.state = {
            // variable define here.
            number : 10 // initliztion 0 
        }
    }
  render() {
    return (
      <div>
        <h1> Number = {this.state.number}</h1>
      </div>
    )
  }
}
