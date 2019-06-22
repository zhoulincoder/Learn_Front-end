import React from 'react'

// Counter 计数器 + - 
export default class Counter extends React.Component{
  
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        { value }
        <div><button onClick={onIncrement}>+</button></div>
        <div><button onClick={onDecrement}>-</button></div>
      </div>
    )
  }
}

