import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginUserName: ''
  },
  mutations: {
    setLoginUser (state, user) {
      state.loginUserName = user.displayName
    },
    deleUserName (state) {
      state.loginUserName = ''
    }
  },
  actions: {
  }
})
