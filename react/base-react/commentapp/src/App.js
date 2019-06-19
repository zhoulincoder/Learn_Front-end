import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class App extends React.Component {
  state = {
    commentLists: []
  }
  handleSubmit = (val) => {
    console.log('from commentInput', val);
    let commentLists = this.state.commentLists.slice(0)
    // 浅拷贝
    commentLists.push(val)
    this.setState({
      commentLists
    })
  }
  render () {
    const { commentLists } = this.state
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit} />

        <CommentList commentLists={commentLists}/>
      </div>
    )
  }
}
export default App;
