<template>
<div id='mynav'>
    <img class='logo' src='../assets/images/logo3.png' alt="">
    <div id="btn1" @click="down" ref='btn1' v-show="roleSet">
      <img src='../assets/images/list.png' alt="">
    </div>
    <!-- 点击显示 -->
    <transition name="slide">
    <div class="hide" v-show="open" @click="lose($event)">
        <div class="first">
            <img class='logo' src='../assets/images/logo3.png' alt="">
            <span id='up' @click='open = !open'>&times;</span>
        </div>
        <ul>
            <!-- <li v-for="value in arr">
                {{value}}
                <img src="../assets/images/jiantou.png" alt="">
            </li> -->
            <li class="lis" @click="goIndex()">
                首页
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goMeetings()">
                所有会务
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goReport()">
                报名管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goCars()">
                派车管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goDining()">
                用餐管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goAccommodation()">
                住宿中心
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goCertificate()">
                证件管理
                <img src="../assets/images/jiantou.png" alt="">
            </li>
            <li class="lis" @click="goPersonalcenter()">
                用户中心
                <img src="../assets/images/jiantou.png" alt="">
            </li>
        </ul>
        
    </div>
    </transition>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      roleSet: 'getRoleSet'
    })
  },
  created () {
  },
  methods: {
    down: function () {
      this.open = !this.open
    },
    goIndex: function () {
      this.$router.push({'name': 'Index'})
      this.open = !this.open
    },
    goMeetings: function () {
      this.$router.push({'name': 'Meetings'})
      this.open = !this.open
    },
    // 报名管理
    goReport: function () {
      if (this.roleSet[0] === 'root') {
        this.$router.push({'name': 'Report'})
      } else {
        this.$router.push({'name': 'Usereport'})
      }
      this.open = !this.open
    },
    // 派车管理
    goCars: function () {
      if (this.roleSet[0] === 'root') {
        this.$router.push({'name': 'Drivercenter'})
      } else {
        this.$router.push({'name': 'Cars'})
      }
      this.open = !this.open
    },
    // 用餐管理
    goDining: function () {
      console.log(this.$store.state.currentUser.role)
      console.log(this.userRole)
      console.log(this.roleSet[0])
      if (this.roleSet[0] === 'root') {
        this.$router.push({'name': 'DiningOne'})
      } else {
        this.$router.push({'name': 'Diningdetail'})
      }
      this.open = !this.open
    },
    // 住宿管理
    goAccommodation: function () {
      console.log(this.$store.state.currentUser.role)
      if (this.roleSet[0] === 'root') {
        this.$router.push({'name': 'HotellistTwo'})
      } else {
        this.$router.push({'name': 'AccommodationManage'})
      }
      this.open = !this.open
    },
    goCertificate: function () {
      this.$router.push({'name': 'Certificate'})
      this.open = !this.open
    },
    goPersonalcenter: function () {
      this.$router.push({'name': 'Personalcenter'})
      this.open = !this.open
    },
    lose: function (e) {
      // console.dir(e.target)
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

