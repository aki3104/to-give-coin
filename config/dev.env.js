'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

module.exports = {
  fireBase: {
  apiKey: '"AIzaSyD9lOnAkP-v0VRN6jQROvI0hTU6iQKpvEc"',
  authDomain: '"to-give-coin.firebaseapp.com"',
  databaseURL: '"https://to-give-coin.firebaseio.com"',
  projectId: '"to-give-coin"',
  storageBucket: '"to-give-coin.appspot.com"',
  messagingSenderId: '"834607360405"',
  appId: '"1:834607360405:web:036e51fab8676fd8a46e9c"',
  measurementId: '"G-LF4WXM1T4D"'
  }
}
