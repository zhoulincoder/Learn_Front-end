import React, { Component } from 'react';


class Filter extends Component {

  handleAll() {
   this.props.renderAll()
  }
  handleActive() {
    this.props.renderActive()
  }
  handleGone() {
    this.props.renderGone()
  }
  render() { 
    
    return ( 
      <div>
        <button onClick={this.handleAll.bind(this)}>全部</button>
        <button onClick={this.handleActive.bind(this)}>未完成</button>
        <button onClick={this.handleGone.bind(this)}>已完成</button>
      </div>
    );
  }
}
 
export default Filter;