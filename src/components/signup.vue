<template>
  <div>
    <h1>新規登録画面</h1>
    <ul class="signup">
      <li>
        <label for="userName" >ユーザー名</label>
        <input type="text" id="userName" placeholder="username" v-model="userName">
      </li>
      <li>
        <label for="userEmail">メールアドレス</label>
        <input type="text" id="userEmail" placeholder="E-mail" v-model="userEmail">
      </li>
      <li>
        <label for="userPass">パスワード</label>
        <input type="password" id="userPass" placeholder="Password" v-model="userPass">
      </li>
    <button id="signupBtn" @click="signupUser">新規登録</button>
    </ul>
    <router-link to="/">ログインはこちら</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPass: ''
    }
  },
  methods: {
    signupUser: function () {
      firebase.auth().createUserWithEmailAndPassword(this.userEmail, this.userPass)
        .then(user => {
          firebase.auth().currentUser.updateProfile({
            displayName: this.userName
          })
          this.$router.push('/dashboard')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signin{
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

input {
  margin: 2px 0;
  padding: 10px;
}

label{
  display: inline-block;
  width: 120px;
}

h1{
  font-weight: normal;
}
</style>
