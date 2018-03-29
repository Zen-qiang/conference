<template>
  <div class="container">
    <my-nav></my-nav>
    <div class="content">
       <p>方便智能一键化的会务管理系统</p>
       <p>报名、审核、嘉宾证制作、签到、<br/>
          住房管理、餐饮管理、会场门禁、<br/>
          行程安排、参与宝典、派车管理等各大功能，<br/>
          会务管理一条龙服务。<br/>
       </p>
       <!-- <input type="btn" value="立即体验"> -->
       <router-link class="btn1" :to="{ path: '/meetings' }">立即体验</router-link>
    </div>
  </div>
</template>

<script>
import myNav from '../components/Header.vue'
export default {
  components: {
    myNav
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/index.scss";

</style>

