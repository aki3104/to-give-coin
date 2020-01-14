<template>
  <div class="container">
    <ul class="loginUser">
      <li id="loginName">{{ loginUserName }}さんようこそ！!</li>
      <li id="userWallet">残高 : {{ loginUserWallet }}</li>
      <li><button id="logout" @click="logoutUser">ログアウト</button></li>
    </ul>
    <h1>ユーザ一覧</h1>
    <ul v-for='item in fetchUseres' :key='item.userName'>
      <li id="NameList">{{ item.userName }}</li>
      <li id="WalletList"><button @click="openWallet(item.userName, item.userWallet)">Walletを見る</button></li>
      <li id="WalletList"><button @click="openSent">送る</button></li>
        <!-- component
        displaywalletの<slot/>に挿入される分 -->
        <displaywallet v-if="displaywallet">
          <!-- default スロットコンテンツ -->
          <p>{{ $store.state.displaymodalName }}さんの残高</p>
          <p>{{ $store.state.displaymodalWallet }}円</p>
          <!-- /default -->
          <!-- footer スロットコンテンツ -->
          <template slot="footer">
            <button @click="closeWallet">閉じる</button>
          </template>
          <!-- /footer -->
        </displaywallet>
         <!-- component
         displaysentの<slot/>に挿入される分-->
        <displaysent @close="closeSent" v-if="displaysent">
          <!-- default スロットコンテンツ -->
          <p>あなたの残高：{{ loginUserWallet }}</p>
          <p>送る金額</p>
          <div><input></div>
          <!-- /default -->
          <!-- footer スロットコンテンツ -->
          <template slot="footer">
            <button>送信</button>
          </template>
          <!-- /footer -->
        </displaysent>
    </ul>
  </div>
</template>

<script>
import displaywallet from './displaywallet.vue'
import displaysent from './displaysent.vue'

export default {
  name: 'loginUser',
  components: {
    displaywallet,
    displaysent
  },
  data () {
    return {
      displaywallet: false,
      displaysent: false
    }
  },
  created () {
    this.$store.commit('setLoginUser')
    this.$store.dispatch('fetchUser')
  },
  methods: {
    logoutUser: function () {
      this.$store.commit('signOutUser')
      this.$router.push('/')
    },
    openWallet: function (userName, userWallet) {
      this.displaywallet = true
      this.$store.commit('displaymodal', {
        name: userName,
        wallet: userWallet
      })
    },
    closeWallet () {
      this.displaywallet = false
    },
    openSent () {
      this.displaysent = true
    },
    closeSent () {
      this.displaysent = false
    }
  },
  computed: {
    loginUserName: function () {
      return this.$store.state.loginUser
    },
    loginUserWallet: function () {
      return this.$store.getters.loginUserWallet
    },
    fetchUseres: function () {
      return this.$store.getters.filterdUseres
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

#NameList{
  width: 100px;
  text-align: center;
}

#NameList{
  flex: 0.8;
  text-align: left;
}

#sent{
  margin-left: 20px
}
</style>
