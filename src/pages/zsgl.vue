<template>
   <div class="zsgl_container">
       <div class="swi">
          <swiper :list="lists" auto style="width:100%;margin:0 auto;"   dots-class="custom-bottom" dots-position="center" show-desc-mask="false"></swiper>
       </div>

       <div class="address" @click="$router.push({'name' : 'Map'})">
         <span>上海全季酒店</span>
         <img src="../assets/images/address.png" alt="">
       </div>
       <div class="cal">

       </div>
       <div class="box1">
         <span>入住信息</span>
         <span><i>{{a}}</i>/10人</span>
          <span><img src="../assets/images/headpic.jpg" alt="" @click="$router.push({'name': 'Rygl'})"></span>
          <span @click="$router.push({'name': 'Rygl'})">more</span>
          <span><img src="../assets/images/jiantou.png" alt=""></span>
       </div>
       <div class="box2">
         <p>住宿备注</p>
         <p>本次住宿由XX集团提供，感觉对方立即给肌肤带来感觉了发达国家独领风队你卡数量单价你大夫克罗米芬队价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡</p>
       </div>
   </div>
</template>

<script>
import { Group, Calendar, Swiper } from 'vux'
export default {
  components: {
    Group,
    Calendar,
    Swiper
  },
  data () {
    return {
      a: 7,
      lists: [
        {
          url: 'javascript:',
          img: '/static/image/adidas1.jpg'
        },
        {
          url: 'javascript:',
          img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff'
        },
        {
          url: 'javascript:',
          img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import  "../assets/css/zsgl.scss";
</style>


