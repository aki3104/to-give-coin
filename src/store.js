import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginUser: '',
    initWallet: 1000,
    displayUseres: [],
    displaymodalName: '',
    displaymodalWallet: ''
  },
  mutations: {
    // -----ログインユーザーの取得
    setLoginUser (state) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.loginUser = user
        } else {
          console.log('データがない')
        }
      })
    },
    // -----signupからcloud firestoreへデータを格納
    setFirebaseStore (state, displayName) {
      const db = firebase.firestore()
      db.collection('users').doc(displayName).set({
        userName: displayName,
        userWallet: state.initWallet
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
        })
    },
    signOutUser (state) {
      firebase.auth().signOut()
      state.loginUser = ''
      state.displayUseres = []
    },
    displaymodal: (state, modal) => {
      state.displaymodalName = modal.name
      state.displaymodalWallet = modal.wallet
    }
  },
  actions: {
    fetchUser ({ commit }) {
      commit('fetchUser')
    }
  },
  getters: {
    filterdUseres: state => {
      return state.displayUseres.filter(displayUser =>
        displayUser.userName !== state.loginUser.displayName
      )
    },
    loginUserWallet: state => {
      let dbUser = state.displayUseres.filter(displayUser =>
        displayUser.userName === state.loginUser.displayName
      )
      if (dbUser[0]) {
        // console.log(dbUser[0].userWallet)
        return dbUser[0].userWallet
      }
    }
  }
})
