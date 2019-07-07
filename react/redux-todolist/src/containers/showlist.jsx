import { connect } from 'react-redux';
import ShowList from '../components/showlist/ShowList';
import { completed } from '../redux/actions'

const mapStateToProps = (state) => {
  console.log(state.NewList);
  let fileList = []
  switch(state.FilterType) {
    case 'ACTIVE':
      fileList = state.NewList.filter(item => item.completed === false)
      return { list: fileList, type: state.FilterType}
    case 'GONE':
      fileList = state.NewList.filter(item => item.completed === true)
      return { list: fileList, type: state.FilterType}
    default:
      return { list: state.NewList, type: state.FilterType }
  }
 
}
// const mapStateToProps = (state) => {
//   return {
//     list: state.NewList
//   }
// }

const mapDispatchToProps=(dispatch)=>{
  return {
    completedThing:(index)=>{
      console.log('传递成功',index);
      dispatch(completed(index))
      }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ShowList)