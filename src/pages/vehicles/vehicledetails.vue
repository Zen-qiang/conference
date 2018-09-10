<template>
  <div class="driveredit_container">
    <ul>
      <li>
        <swiper :list="addressList" style="width:100%" auto class="position" height="180px" dots-position="center" :show-desc-mask="show"></swiper>
        
      </li>
      <li>
        <span>车辆名称 ：</span>
        <span><input type="text" placeholder="宝骏117豪华商务车"></span>
      </li>
      <li>
        <span>车牌号码 ：</span>
        <span><input type="text" placeholder="沪B32191"></span>
      </li>
      <li>
        <span>联系人 ：</span>
        <span><input type="text" placeholder="刘韩"></span>
      </li>
      <li>
        <span>手机号 ：</span>
        <span><input type="text" placeholder="1502682214"></span>
      </li>
      <li>
        <span>乘员人数 ：</span>
        <img src="../../assets/images/headpic18.png" alt="">
       <img src="../../assets/images/jiantou.png" alt="">
      </li>
      <li>
        <span>发车时间 ：</span>
        <span>2018-12-24 13:00</span>
      </li>
      <li>
        <span>发车地点 ：</span>
        <span>虹桥机场2号航站楼</span>
      </li>
    </ul>
    <p v-if="value" class="save" @click="$router.push({'name' : 'Cars'})">报名该车辆</p>
    <p v-else></p>
  </div>
</template>

<script>
import {Swiper} from 'vux'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      addressList: demoList,
      false: false,
      value: '',
      show: false
    }
  },
  created () {
    this.value = this.$store.state.val
  },
  computed: {
    val () {
      return this.$store.state.val
    }
  }
}
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vehicledetails.scss";
 .position>div:nth-of-type(2){
    bottom: -30px;
  }
</style>

