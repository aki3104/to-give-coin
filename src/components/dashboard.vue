<template>
  <div class="container">
    <ul class="loginUser">
      <li id="loginName">{{ loginUserName }}さんようこそ！!</li>
      <li id="userWallet">残高 : {{ userWallet }}</li>
    </ul>
    <h1>ユーザ一覧</h1>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'loginUser',
  data () {
    return {
      loginName: '',
      userWallet: '500'
    }
  },
  methods: {
  },
  computed: {
    loginUserName: function () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('setLoginUser', user)
        }
      })
      return this.$store.state.loginUserName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

#loginName{
  flex: 1;
  text-align: left;
}

#userWallet{
  width: 150px;
  text-align: center;
}
</style>
