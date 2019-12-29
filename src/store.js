import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userNames: [''],
    loginUserName: ''
  },
  mutations: {
    adduserName (state, userName) {
      state.userNames.push({
        adduserName: userName
      })
    },
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
