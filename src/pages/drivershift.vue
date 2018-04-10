<template>
  <div class="drivershift_container">
     <div class="btn1">
       <img src="../assets/images/saomiao.png" alt="">
       <span>扫描用户</span>
     </div>

      <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="100px">
        <tab-item class="vux-center" 
                  :selected="demo2 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
        </tab-item> 
        <span class="icon1">5</span> 
        <span class="icon2">1</span>
    </tab>
      <swiper v-model="index"  :show-dots="false" height="730px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <img src="../assets/images/headpic11.png" alt="">
                <div class="left">
                  <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                </div>
                <div class="right">
                  <p>已乘车</p>
               </div>
              </li>
              <li>
                <img src="../assets/images/headpic11.png" alt="">
                <div class="left">
                  <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                </div>
                <div class="right">
                  <p>已乘车</p>
               </div>
              </li>
              <li>
                <img src="../assets/images/headpic11.png" alt="">
                <div class="left">
                  <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                </div>
                <div class="right">
                  <p>已乘车</p>
               </div>
              </li>
              <li>
                <img src="../assets/images/headpic11.png" alt="">
                <div class="left">
                  <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                </div>
                <div class="right">
                  <p>已乘车</p>
               </div>
              </li>
            </ul>
          </div>
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <img src="../assets/images/headpic19.png" alt="">
                <div class="left">
                  <p>刘竹菡 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                </div>
                <div class="right right1">
                  <p>未乘车</p>
               </div>
              </li>
            </ul>
          </div>
        </swiper-item>
      </swiper> 
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['已乘车', '未乘车']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: list(),
      demo2: '已乘车',
      index: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/drivershift.scss";
</style>

