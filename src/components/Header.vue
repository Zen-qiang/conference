<template>
<div id='mynav'>
    <img class='logo' src='../assets/images/logo.png' alt="">
    <div id="btn1" @click="down" ref='btn1' v-show="userRole">
      <img src='../assets/images/list.png' alt="">
    </div>
    <!-- 点击显示 -->
    <transition name="slide">
    <div class="hide" v-show="open" @click="lose($event)">
        <div class="first">
            <img class='logo' src='../assets/images/logo.png' alt="">
            <span id='up' @click='open = !open'>&times;</span>
        </div>
        <ul>
            <!-- <li v-for="value in arr">
                {{value}}
                <img src="../assets/images/jiantou.png" alt="">
            </li> -->
            <li class="lis" @click="go1()">
                首页
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go2()">
                所有会务
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go3()">
                报名管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go4()">
                派车管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go5()">
                用餐管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go6()">
                住宿中心
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go7()">
                证件管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="go8()">
                用户中心
                <img src="../assets/images/jiantou.png" alt="">
            </li>
        </ul>
        
    </div>
    </transition>
</div>
</template>

<script>
export default {
  // props: {

  // },
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
  computed: {
    userRole: function () {
      return this.$store.state.currentUser.role
    }
  },
  created () {
  },
  methods: {
    down: function () {
      this.open = !this.open
    },
    go1: function () {
      this.$router.push({'name': 'Index'})
      this.open = !this.open
    },
    go2: function () {
      this.$router.push({'name': 'Meetings'})
      this.open = !this.open
    },
    // 报名管理
    go3: function () {
      if (this.userRole === 'admin') {
        this.$router.push({'name': 'Report'})
      } else {
        this.$router.push({'name': ''})
      }
      this.open = !this.open
    },
    // 派车管理
    go4: function () {
      if (this.userRole === 'admin') {
        this.$router.push({'name': 'Drivercenter'})
      } else {
        this.$router.push({'name': 'Cars'})
      }
      this.open = !this.open
    },
    // 用餐管理
    go5: function () {
      console.log(this.$store.state.currentUser.role)
      console.log(this.userRole)
      if (this.userRole === 'admin') {
        this.$router.push({'name': 'Dining1'})
        console.log(1111111111)
      } else {
        this.$router.push({'name': 'Diningdetail'})
        console.log(222222222222)
      }
      this.open = !this.open
    },
    // 住宿管理
    go6: function () {
      console.log(this.$store.state.currentUser.role)
      if (this.userRole === 'admin') {
        this.$router.push({'name': 'Hotelregist'})
      } else {
        this.$router.push({'name': 'Zsgl1'})
      }
      this.open = !this.open
    },
    go7: function () {
      this.$router.push({'name': 'Certificate'})
      this.open = !this.open
    },
    go8: function () {
      this.$router.push({'name': 'Personalcenter'})
      this.open = !this.open
    },
    lose: function (e) {
      console.dir(e.target)
      if (e.target.className === 'hide') {
        this.open = !this.open
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/head.scss";
</style>

