<template>
<!-- <transition name='slide'> -->
  <div class="mask_container" :class="{'active' : flag}">
    <!-- <my-nav></my-nav> -->
    <div class="content">
       <p>方便智能一键化的会务管理系统</p>
       <p>报名、审核、嘉宾证制作、签到、<br/>
          住房管理、餐饮管理、会场门禁、<br/>
          行程安排、参与宝典、派车管理等各大功能，<br/>
          会务管理一条龙服务。<br/>
       </p>
       <!-- <input type="btn" value="立即体验"> -->
       <div class="btn1" @click="$router.push({'name': 'Login'})" v-show="!userRole">立即登录</div>
    </div>
  </div>
<!-- </transition> -->
  
</template>

<script>

export default {
  data () {
    return {
      flag: false
    }
  },
  computed: {
    userRole: function () {
      return this.$store.state.currentUser.role
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/index.scss";

</style>

