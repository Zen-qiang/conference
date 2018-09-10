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
    <div class="content">
      <div class="bottom">
        <img src="../assets/images/english.png" alt="">
        <p>English</p>
      </div>
    </div>
    <toast v-model="show" type="text" position="middle">{{$t('message.info')}}</toast>
    <!-- <group :title="$t('Use as a plugin')">
      <cell :title="$t('Show Me')" @click.native="showPlugin" is-link></cell>
      <cell :title="$t('Will auto close in 3s')" @click.native="showPluginAuto" is-link></cell>
    </group> -->
  </div>
</template>
<script>
import { Toast } from 'vux'
export default {
  name: 'login',
  components: {
    Toast
  },
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      userName: '',
      password: '',
      show: false,
      nowConferenceId: this.$store.state.nowConferenceId,
      showState: false
    }
  },
  computed: {
  //   nowConferenceId () {
  //     return this.$store.state.nowConferenceId
  //   }
    isUser () {
      return this.$store.state.isUser
    },
    // isRoot () {
    //   return this.roleSet.some(item => {
    //     item === 'root'
    //   })
    // }
    isRoot () {
      return this.$store.state.isRoot
    },
    isAdmin () {
      return this.$store.state.isAdmin
    },
    isDriver () {
      return this.$store.state.isDriver
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
        console.log(res)
        if (res.data.code === 0) {
          // let currentUser = {
          //   name: res.data.data.name,
          //   roleSet: res.data.data.roleSet
          // }
          if (res.data.data.defaultConference !== null) {
            this.nowConferenceId = res.data.data.defaultConference.id
            this.$store.commit('nowConferenceId', this.nowConferenceId)
          }
          // console.log(this.nowConferenceId)
          this.isExit(res.data.data.roleSet)
          // console.log(this.$store.state.isRoot)
          this.$store.commit('userInfo', res.data.data)
          sessionStorage.setItem('name', res.data.data.name)
          // this.$store.commit('currentUser', currentUser)
          this.showState = true
          if (this.showState) {
            this.$router.push({'name': 'Meetings'})
          }
        } else {
          this.showState = false
          this.show = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    isExit (val) {
      // some用于检测数组中是否有满足条件的元素，形参是一个函数，类型是布尔值
      this.$store.commit('setRoot', val.some(item => item === 'root'))
      this.$store.commit('setAdmin', val.some(item => item === 'admin'))
      this.$store.commit('setDriver', val.some(item => item === 'driver'))
      this.$store.commit('setUser', val.some(item => item === 'user'))
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

