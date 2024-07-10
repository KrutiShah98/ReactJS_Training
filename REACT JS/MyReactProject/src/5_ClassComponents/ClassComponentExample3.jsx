/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ClassComponentExample3 extends Component {
    constructor(){
        super()
        this.state={
            counter:10,
            name:"Gaurav"
        }
    }
    handleIncrement=()=>{
        this.setState({counter : this.state.counter + 1})
    }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        
      </div>
    )
  }
}
