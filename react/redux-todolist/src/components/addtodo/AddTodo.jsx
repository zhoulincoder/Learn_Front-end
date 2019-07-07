import React, { Component } from 'react';

class AddTodo extends Component {
  state = {  }
  handleAdd() {
    // console.log(this.refs.inputText.value);
    // console.log(this.props);
    if(this.refs.inputText.value) {
      this.props.addTodoText(this.refs.inputText.value)
      this.refs.inputText.value = ''
    }

  }
  render() { 
    return ( 
      <div>
        <input type="text" ref="inputText" />
        <button onClick={this.handleAdd.bind(this)}>添加</button>
      </div>
    );
  }
}
 
export default AddTodo;