<template>
  <div class="login_container">
    <img src="../assets/images/logo3.png" alt="" class="logo">
    <div class="box1">
      <label ref="input1">
        <span></span>
        <input type="text"
          placeholder="请输入账号"
          v-model="userName"
          @focus="useronFocus" 
          @blur="useronBlur">
        <span ref="aaa" v-show="userName !== ''"  @click="clearUsername"></span>
      </label>
      
    </div>
    <div class="box2">
      <label ref="input2">
        <span></span>
        <input type="password"
          placeholder="请输入密码" 
          v-model="password" 
          @focus="pwdonFocus"
          @blur="pwdonBlur">
        <span ref="bbb" v-show="password !== ''" @click="clearPwd"></span>
      </label>
      
    </div>
    
    <input type="button" value="登录" @click="login">
    <div class="bottom">
      <img src="../assets/images/english.png" alt="">
      <p>English</p>
    </div>
    
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      userName: '',
      password: '',
      nowConferenceId: this.$store.state.nowConferenceId
    }
  },
  // computed: {
  //   nowConferenceId () {
  //     return this.$store.state.nowConferenceId
  //   }
  // },
  methods: {
    login () {
      this.axios({
        method: 'post',
        url: '/api/user/login',
        data: {
          userName: this.userName,
          password: this.password
        }
      }).then(res => {
        if (res.data.code === 0) {
          let currentUser = {
            name: res.data.data.name,
            roleSet: res.data.data.roleSet
          }
          if (res.data.data.defaultConference !== null) {
            this.nowConferenceId = res.data.data.defaultConference.id
            this.$store.commit('nowConferenceId', this.nowConferenceId)
          }
          // console.log(this.nowConferenceId)
          this.$store.commit('userInfo', res.data.data)
          this.$store.commit('currentUser', currentUser)
          this.$router.push({'name': 'Meetings'})
        }
        console.log(res)
        console.log(err)
      })
    },
    useronFocus () {
      this.$refs.input1.classList.add('active')
      this.$refs.input1.classList.remove('normal')
    },
    useronBlur () {
      this.$refs.input1.classList.remove('active')
      this.$refs.input1.classList.add('normal')
    },
    pwdonFocus () {
      this.$refs.input2.classList.add('active')
      this.$refs.input2.classList.remove('normal')
    },
    pwdonBlur () {
      this.$refs.input2.classList.remove('active')
      this.$refs.input2.classList.add('normal')
    },
    clearUsername () {
      this.userName = ''
    },
    clearPwd () {
      this.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/login.scss";
</style>

