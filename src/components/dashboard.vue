<template>
  <ul class="loginUser">
    <li id="loginName">{{ loginName }}さんようこそ！!</li>
    <li id="userWallet">残高 : {{ userWallet }}</li>
  </ul>
</template>

<script>
export default {
  name: 'loginUser',
  data () {
    return {
      loginName: 'test',
      userWallet: '500'
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
  background-color: pink;
  width: 200px;
}

#userWallet{
  background-color: skyblue;
  flex: 1;
  text-align: right;
  padding-right: 30px;
}
</style>
