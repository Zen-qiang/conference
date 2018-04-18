<template>
  <div class="login_container">
    <img src="../assets/images/logo2.png" alt="" class="logo">
    <input type="text" placeholder="请输入账号" v-model="value1" ref="input1" @focus="onFocus1" @blur="onBlur1">
    <img src="../assets/images/icon01.png" alt="">
    <input type="password" placeholder="请输入密码" v-model="value2" ref="input2" @focus="onFocus2" @blur="onBlur2">
    <img src="../assets/images/icon2.png" alt="">
    <input type="btn" value="登录" @click="check">
    <div class="bottom">
      <img src="../assets/images/english.png" alt="">
      <p>English</p>
    </div>
    <img src="../assets/images/cuo.png" alt="" ref="aaa" v-show="value1 !== ''" @click="click1">
    <img src="../assets/images/cuo.png" alt="" ref="bbb" v-show="value2 !== ''" @click="click2">
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
      value2: ''
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

