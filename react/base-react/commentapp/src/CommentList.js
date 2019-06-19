import React from 'react';

class CommentList extends React.Component {
  whati = (e) => {
    console.log(e);
    
  }
  render() {
    const commentLists = this.props.commentLists
    return (
      <ul>
        {
          commentLists.map(({ userName, comment }, i) => (
            <li key={i} onClick={this.whati}>
              {userName}
              {comment}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList