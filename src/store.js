import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginUser: ''
  },
  mutations: {
    setLoginUser (state) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.loginUser = user
          let db = firebase.firestore()
          db.collection(`users/${state.loginUser}/user`).add({
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
          })
        }
      })
    },
    signOutUser (state) {
      firebase.auth().signOut()
      state.loginUser = ''
    },
    adduser (state) {
    }
  },
  actions: {
  },
  getters: {
  }
})
