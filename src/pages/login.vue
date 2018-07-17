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
      password: ''
    }
  },
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
          this.$store.commit('currentUser', currentUser)
          this.$router.push({'name': 'Meetings'})
        }
        console.log(res)
      }).catch(err => {
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
    // check () {
    //   if (this.value1 === '111' && this.value2 === '111') {
    //     this.$router.push({'name': 'Meetings'})
    //     this.$store.commit(types.CURRENTUSER, {'name': '111', 'role': 'admin'})
    //   } else if (this.value1 === '222' && this.value2 === '222') {
    //     this.$router.push({'name': 'Meetings'})
    //     this.$store.commit(types.CURRENTUSER, {'name': '222', 'role': 'user'})
    //   } else {
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/login.scss";
</style>

