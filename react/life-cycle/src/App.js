import React from 'react';
import logo from './logo.svg';
import Child from './Child'
import Child1 from './Child1'
import Context from './Context'
import Context1 from './Context1'
import './App.css';

class App extends React.Component{
  constructor () {
    super()
    this.objRef = React.createRef()
  }
  state = {
    count: 0,
    showChild1: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () =>  {
    let { count } = this.state
    count = count + 2
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'React String ref'
    this.methodRef.innerHTML = 'new method ref'
    this.objRef.current.innerHTML = 'new object ref'
  }
  render () {
    const { count, showChild } = this.state
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodRef = ref}>method ref</span>   
        <span ref={this.objRef}>object ref</span>

        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{__html:`<strong>strong</strong>`}}></div>

        <button onClick={this.handleChildPropsChange}>
          Child Component Props Change
        </button>
        <button onClick={this.handleToggleChild}>handleToggleChild</button>
        {
          showChild ? 
          <Child count={count}/> : ''
        }
        {
          !showChild ?
          <Child1 count={count} /> : <Child count={count}/>
        }
        {/* 信息转给子 */}
        <Context>
          li为
          <p>姓名</p>
          19
          <p>年龄</p>
        </Context>

        <Context1>
          <p>react 16.x.x</p>
        </Context1>
      </div>
    )
  }
}

export default App;
