<template>
  <div class="login_container">
    <img src="../assets/images/logo2.png" alt="" class="logo">
    <div class="box1">
      <label ref="input1">
        <span></span>
        <input type="text" placeholder="请输入账号" v-model="value1" @focus="onFocus1" @blur="onBlur1">
        <span ref="aaa" v-show="value1 !== ''"  @click="click1"></span>
      </label>
      
    </div>
    <div class="box2">
      <label ref="input2">
        <span></span>
        <input type="password" placeholder="请输入密码" v-model="value2"  @focus="onFocus2" @blur="onBlur2">
        <span ref="bbb" v-show="value2 !== ''" @click="click2"></span>
      </label>
      
    </div>
    
    <input type="button" value="登录" @click="check">
    <div class="bottom">
      <img src="../assets/images/english.png" alt="">
      <p>English</p>
    </div>
    
  
  </div>
</template>

<script>
import * as types from '../store/mutation-types'
export default {
  data () {
    return {
      a: true,
      b: false,
      value1: '',
      value2: '',
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    onFocus1 () {
      this.$refs.input1.classList.add('active')
      this.$refs.input1.classList.remove('normal')
    },
    onBlur1 () {
      this.$refs.input1.classList.remove('active')
      this.$refs.input1.classList.add('normal')
    },
    onFocus2 () {
      this.$refs.input2.classList.add('active')
      this.$refs.input2.classList.remove('normal')
    },
    onBlur2 () {
      this.$refs.input2.classList.remove('active')
      this.$refs.input2.classList.add('normal')
    },
    click1 () {
      this.value1 = ''
    },
    click2 () {
      this.value2 = ''
    },
    check () {
      if (this.value1 === '111' && this.value2 === '111') {
        this.$router.push({'name': 'Meetings'})
        this.$store.commit(types.CURRENTUSER, {'name': '111', 'role': 'admin'})
        this.$store.commit('setVersion', '2333')
      } else if (this.value1 === '222' && this.value2 === '222') {
        this.$router.push({'name': 'Meetings'})
        this.$store.commit(types.CURRENTUSER, {'name': '222', 'role': 'user'})
      } else {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/login.scss";
</style>

