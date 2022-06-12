// vuex最核心的管理对象store
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

// 使用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})