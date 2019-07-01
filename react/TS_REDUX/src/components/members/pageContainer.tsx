import * as React from 'react';
//高阶组件 container概念
import { connect } from 'react-redux';
import { MembersPage } from './page'
import { fetchMembersAction } from './actions/fetchMemers';

const mapStateToProps = (state) => ({
  members: state.members
  // 获取数据作为props
})

const mapActionsToProps = (dispatch) => ({
  fetchMembers: () => dispatch(fetchMembersAction())
}) 

export const MembersPageContainer = connect(mapStateToProps, mapActionsToProps)(MembersPage)
