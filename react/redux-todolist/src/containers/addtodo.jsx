import AddTodo from '../components/addtodo/AddTodo';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
  return {
    addTodoText: (text)=> {
      console.log('传递成功',text);
      dispatch(addTodo(text))
    }
  }
}


export default connect(null, mapDispatchToProps)(AddTodo)