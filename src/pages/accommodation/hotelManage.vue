<template>
   <div class="zsgl_container">
       <div class="swi">
          <swiper
          style="width:100%;margin:0 auto;"
            :list="lists" auto
            dots-position="center"
            :show-desc-mask="false"
          ></swiper>
       </div>

       <div class="address" @click="$router.push({'name' : 'Map'})">
         <span>{{hotelName}}</span>
         <img src="../../assets/images/address.png" alt="">
       </div>

       <div class="cal">
    <group>
      <calendar  v-model="firstTime" :title="'请选择入住日期'" show-popup-header :popup-header-title="'请选择入住日期'"></calendar>
      <calendar  v-model="lastTime" :title="'请选择退房日期'" show-popup-header :popup-header-title="'请选择退房日期'"></calendar>
    </group>
          <input type="button" value="安排入住" @click="checkin">
       </div> 
       <div class="box1">
         <span>入住信息</span>
         <span><i>{{a}}</i>/10人</span>
          <!-- <span><img src="../assets/images/headpic.jpg" alt="" @click="$router.push({'name': 'PeopleManage'})"></span>
          <span @click="$router.push({'name': 'PeopleManage'})">more</span>
          <span><img src="../assets/images/jiantou.png" alt=""></span> -->
       </div>
       <div class="box2">
         <p>住宿备注</p>
         <p>本次住宿由XX集团提供，感觉对方立即给肌肤带来感觉了发达国家独领风队你卡数量单价你大夫克罗米芬队价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡</p>
       </div>

   </div>
</template>

<script>
import { Group, Calendar, Swiper, InlineCalendar } from 'vux'
export default {
  components: {
    Group,
    Calendar,
    Swiper,
    InlineCalendar
  },
  data () {
    return {
      a: 0,
      lists: [
        {
          url: 'javascript:',
          img: '/static/image/lb1.jpg'
        },
        {
          url: 'javascript:',
          img: '/static/image/lb2.jpg'
        },
        {
          url: 'javascript:',
          img: '/static/image/bo3.jpg'
        }
      ],
      firstTime: 'TODAY',
      lastTime: 'TODAY',
      hotelName: this.$route.query.hotelName
    }
  },
  methods: {
    onChange (val) {
      console.log('on-change', val)
      if (this.value.length === 3) {
        this.value.shift()
      }
    },
    onViewChange (val, count) {
      console.log('on view change', val, count)
    },
    checkin () {
      this.$router.push({
        name: 'PeopleManage',
        query: {
          hotelName: this.hotelName
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import  "../../assets/css/hotelManage.scss";
</style>


