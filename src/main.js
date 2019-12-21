// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
export var firebaseConfig = {
  apiKey: process.env.fireBase.apiKey,
  authDomain: process.env.fireBase.authDomain,
  databaseURL: process.env.fireBase.databaseURL,
  projectId: process.env.fireBase.projectId,
  storageBucket: process.env.fireBase.storageBucket,
  messagingSenderId: process.env.fireBase.messagingSenderId,
  appId: process.env.fireBase.appId,
  measurementId: process.env.fireBase.measurementId
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
