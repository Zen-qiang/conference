<template>
   <div class="zsgl_container">
       <div class="swi">
          <swiper :list="lists" auto style="width:100%;margin:0 auto;" height="180px"  dots-class="custom-bottom" dots-position="bottom"></swiper>
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


