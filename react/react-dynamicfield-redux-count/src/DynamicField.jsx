import React from 'react'
import { Input, Button, Divider } from 'antd'

function Field (props) {
  const { value } = props
  return (
    <div>
      <Divider />
      <div>
        姓名: <Input placeholder="二大爷" value={value.name} onChange={ (e) => {
          props.onChange(e.target.value, 'name', props.index)
        }} />
      </div>
      <div>
        地址: <Input placeholder="石头村" value={value.address} onChange={ (e)=> {
          props.onChange(e.target.value, 'address', props.index)
        }} />
      </div>
      <Button type="primary" onClick={ e => props.onDelete(e.currentTarget.index )}>删除</Button>

    </div>
  )
}

class DynamicField extends React.Component{
  state = {
    lists: [
      {
        name: '',
        address: ''
      }
    ]
  }
  handleChange = (value, key, i) => {
    let lists = this.state.lists.slice(0)  //浅拷贝

    const obj = lists[i]
    // {
    //   name: '123'
    //   address: '33'
    // }
    const newObj = {
      ...obj,
      [key]: value
      //  变量key
    }
    lists[i] = newObj
    this.setState({
      lists
    })
  } 
  handleDelete = (i) => {
    let lists = this.state.lists.slice(0)
    lists.splice( i, 1)
    this.setState({
      lists
    })
  }
  handleAddField = () => {
    let lists = this.state.lists.slice(0)
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }
  render() {
    const { lists } = this.state
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Field key={i} value={list} onChange={this.handleChange} 
            onDelete={this.handleDelete} index={i} />
          })
        }
        <Button type="primary" onClick={this.handleAddField}>增加</Button>
      </div>
    )
  }
}

export default DynamicField