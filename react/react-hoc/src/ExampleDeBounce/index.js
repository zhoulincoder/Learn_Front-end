import React, { Component } from 'react';
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util'
//防抖

@decDisplayName('CustomExampleDebounce')   //加了一个静态属性 displayName
class ExampleDebounce extends Component {
  state = {  }
  @decDebounce(1000)
  handleSubmit () {
    console.log('submit request');
  }

  // handleSubmit = debounce(function() {
  //   console.log('request');
  // }, 1000)
  // 提交订单要添加防抖
  @decArrowDebounce(1000)
  handleBuy =() => {
    console.log('buy now');
  }
  // 箭头函数下 @decDebounce 出错
  render() { 
    console.log(this.handleBuy);
    console.log(this.handleSubmit);
    
    return ( 
      <div>
        <button onClick={this.handleSubmit}>提交订单</button>
        <button onClick={this.handleBuy}> 立即购买</button>
      </div>
    );
  }
}
 
export default ExampleDebounce;