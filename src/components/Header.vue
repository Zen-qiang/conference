<template>
<div id='mynav'>
    <img class='logo' src='../assets/images/logo.png' alt="">
    <div id="btn1" @click="down()">
      <img src='../assets/images/list.png' alt="">
    </div>
    <!-- 点击显示 -->
    <transition name="slide">
    <div class="hide" v-show="open">
        <div class="first">
            <img class='logo' src='../assets/images/logo.png' alt="">
            <span id='up' @click='up()'>&times;</span>
        </div>
        <ul>
            <li v-for="value in arr">
                {{value}}
                <img src="../assets/images/jiantou.png" alt="">
            </li>
        </ul>
        
    </div>
    </transition>
</div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        '首页',
        '所有会务',
        '报名管理',
        '派车管理',
        '用餐管理',
        '住宿管理',
        '证件管理',
        '用户中心'
      ],
      open: false
    }
  },
  methods: {
    down: function () {
      this.open = !this.open
      if (this.open === true) {
        // document.getElementsByClassName('.hide').style.transform = ''
      }
    },
    up: function () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/head.scss";
</style>

