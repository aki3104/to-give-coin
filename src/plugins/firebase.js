'use strict'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
let firebaseConfig = {
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
console.log('test')
