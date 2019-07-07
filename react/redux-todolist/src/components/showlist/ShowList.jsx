import React, { Component } from 'react';
import './showList.css'
class ShowList extends Component {

  handleDone(index) {
    return () => {
      console.log(index);
      this.props.completedThing(index)
    }
  }
  
  render() {
    let { list,type } = this.props
    console.log(type);
    return (
      <ul>
        {
          list.map((item, index) => (
            <li onClick={this.handleDone(index)} key={index}
              className={item.completed ? 'line-through' : ''}
              ref='node'>
              {item.text}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ShowList;