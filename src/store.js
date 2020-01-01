import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginUser: '',
    displayUser: []
  },
  mutations: {
    // -----cloud firestoreへデータを格納
    setLoginUser (state, userWallet) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.loginUser = user
          firebase.firestore().collection(`users/${state.loginUser.displayName}/user`).add({
            userName: user.displayName,
            userWollet: userWallet
          })
        }
      })
    },
    // -----cloud firestoreからデータを取得
    fetchUser (state) {
      firebase.firestore().collection(`users/${state.loginUser.displayName}/user`)
        // .where('users', '==', 'aki310')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`)
            state.displayUser.push(doc.data())
            console.log(state.displayUser)
          })
        })
    },
    signOutUser (state) {
      firebase.auth().signOut()
      state.loginUser = ''
    }
  },
  actions: {
    fetchUser ({ commit }) {
      console.log('testactions')
      commit('fetchUser')
    }
  },
  getters: {
    filterdList: state => {
      return state.displayUser.filter(user => {
        if (user.userName !== state.loginUser.displayName) {
          return user
        } else {
          console.log(state.displayUser)
        }
      })
    }
  }
})
