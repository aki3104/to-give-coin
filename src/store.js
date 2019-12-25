import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userNames: ['test']
  },
  mutations: {
    adduserName (state, userName) {
      state.userNames.push({
        adduserName: userName
      })
    }
  }
})
