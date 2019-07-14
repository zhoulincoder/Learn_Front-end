import * as types from '../types'

const state = {
  showSidebar: false,
}

const mutations = {
  //拿来修改vuex的数据源
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  }
}

const actions = {
  //sessionStorage(关闭页面就没),localStorage5m(不清除一直在),cookie4kb
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}
const getters = {
  //$store  取vux仓库的东西
  showSidebar: state => state.showSidebar
}

export default {
  state, mutations, actions, getters
}