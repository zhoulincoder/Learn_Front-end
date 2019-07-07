// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/filter/Filter';
import { selectAll, selectActive, selectGone } from '../redux/actions'

// const mapStateToProps = (state) => {
//   return {
//     list: state.NewList
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    renderAll: () => {
      console.log('加载全部');
      dispatch(selectAll())
    },
    renderActive: () => {
      console.log('加载未完成');
      dispatch(selectActive())
    },
    renderGone: () => {
      console.log('加载已完成');
      dispatch(selectGone())
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)