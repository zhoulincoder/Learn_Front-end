import React from 'react'

class Child1 extends React.Component {
  state = {
    a: 1
  }
  /**
   * 更新 state
   * 根据返回值 {} 
   * 不更新 null
   */
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...props,
      ...state
      // 放在一起作为新返回
      //老版本： willMount 拿到props setState 改变 
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }
  getSnapshotBeforeUpdate() {
    //更新前快照
    console.log('getSnapshotBeforeUpdate');
    return 888
  }
  //15.xxx a undefined
  //16.xxx a 是返回的快照
  componentDidUpdate(preProps, PreState, a) {
    console.log('componentDidUpdate',a);
  }
  handleStateChange = () => {
    this.setState({
      a:10
    })
  }
  render() {
    console.log('渲染的时候 state', this.state);
    return (
      <div>
        <button onClick={this.handleStateChange}>handleStateChange</button>
        Child1
      </div>
    )
  }
}

export default Child1