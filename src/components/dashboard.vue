<template>
  <div class="container">
    <ul class="loginUser">
      <li id="loginName">{{ loginUserName }}さんようこそ！!</li>
      <li id="userWallet">残高 : {{ userWallet }}</li>
      <li><button id="logout" @click="logoutUser">ログアウト</button></li>
    </ul>
    <h1>ユーザ一覧</h1>
    <ul>
      <li>{{ fetchUseres }}</li>
    </ul>
    <button @click="fetchUser">test</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'loginUser',
  data () {
    return {
      loginName: '',
      userWallet: '1000'
    }
  },
  methods: {
    logoutUser: function () {
      this.$store.commit('signOutUser')
      this.$router.push('/')
    },
    ...mapActions(['fetchUser'])
  },
  computed: {
    loginUserName: function () {
      if (this.$store.state.loginUser.displayName === undefined) {
        this.$store.commit('setLoginUser', this.userWallet)
        // console.log(this.$store.state.loginUser.displayName)
      } else {
        // console.log('else')
        return this.$store.state.loginUser.displayName
      }
    },
    fetchUseres: function () {
      return this.$store.state.displayUser
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
