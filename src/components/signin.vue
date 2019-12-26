<template>
  <div>
    <h1>ログイン</h1>
    <ul class="signin">
      <li>
        <label for="userEmail">メールアドレス</label>
        <input type="text" id="userEmail" placeholder="E-mail" v-model="userEmail">
      </li>
      <li>
        <label for="userPass">パスワード</label>
        <input type="password" id="userPass" placeholder="Password" v-model="userPass">
      </li>
    <button id="signinBtn" @click="signInUser">ログイン</button>
    </ul>
    <router-link to="/signup">新規登録はこちら</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signin',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPass: ''
    }
  },
  methods: {
    signInUser: function () {
      firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPass).then(
        user => {
          this.$router.push('/HelloWorld')
        },
        err => {
          alert(err.message)
        }
      )
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
