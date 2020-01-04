import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginUser: '',
    displayUseres: []
  },
  mutations: {
    // -----cloud firestoreへデータを格納
    setLoginUser (state, userWallet) {
      const db = firebase.firestore()
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.loginUser = user
          db.collection('users').doc(user.displayName).set({
            userName: user.displayName,
            userWollet: userWallet
          })
        }
      })
    },
    // -----cloud firestoreからデータを取得
    fetchUser (state) {
      firebase.firestore().collection(`users`)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`)
            state.displayUseres.push(doc.data())
          })
          console.log(state.displayUseres)
        })
    },
    signOutUser (state) {
      firebase.auth().signOut()
      state.loginUser = ''
      state.displayUseres = ''
    }
  },
  actions: {
    fetchUser ({ commit }) {
      console.log('testactions')
      commit('fetchUser')
    }
  },
  getters: {
    filterdUseres: state => {
      return state.displayUseres.filter(displayUser =>
        // console.log(displayUser.userName)
        // console.log(state.loginUser)
        displayUser.userName !== state.loginUser.displayName
      )
    }
  }
})
