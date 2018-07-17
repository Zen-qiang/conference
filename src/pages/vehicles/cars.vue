<template>
  <div class="cars_container">
     <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="76px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item> 
      </tab>
      <swiper v-model="index"  :show-dots="false" height="1150px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul class="ul1 ul3">
              <li @click="$router.push({'name' : 'Driveradd'})">
                <img src="../../assets/images/car1.png" alt="" >
              </li>
              <li>
                <span>宝骏1 17豪华商务车</span>
                <span class="green">未发车</span>
              </li>
              <li>
                <span>车牌号码：沪B32191</span>
                <span>李敏</span>
                <span>手机：15026818531</span>
              </li>
              <li @click="$router.push({'name' : 'Driveradd'})">
                <span><i>发车时间：</i> 2018-12-24 13：00</span>
                <span><i>6</i>/6-10人</span>
                <span><i>发车地点：</i> 闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
              </li>
              <li >
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="" v-if="!flag">
                <span>{{firstNum}}/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
              <li>
                <span>报名状态</span>
                <span @click="enroll" v-if='flag'>立即报名</span>
                <span @click="enroll" v-if='!flag' class="btn1">立即报名</span>
              </li>
            </ul>
 
             <ul class="ul1 ul2 ul3" v-if="flag">
              <li>
                <img src="../../assets/images/car4.png" alt="">
              </li>
              <li>
                <span>GMC1 17豪华商务车</span>
                <span>已发车</span>
              </li>
               <li>
                <span>车牌号码：沪B32191</span>
                <span>李敏</span>
                <span>手机：15026818531</span>
              </li>
              <li>
                <span><i>发车时间：</i> 2018-12-24 13：00</span>
                <span><i>6</i>/6-10人</span>
                <span><i>发车地点：</i> 闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
              </li>
              <li @click="$router.push({'name' : 'Drivershift'})">
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="">
                <span>6/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
              <li>
                <span>报名状态</span>
                <span class="btn1">立即报名</span>
              </li>
            </ul>

             <ul class="ul1 ul2">
              <li @click="$router.push({'name' : 'Driveradd'})">
                <img src="../../assets/images/car4.png" alt="" @click="$router.push({'name' : 'Cars'})">
              </li>
              <li @click="$router.push({'name' : 'Driveradd'})">
                <span>GMC1 17豪华商务车</span>
                <span class="green">未发车</span>
              </li>
               <li @click="$router.push({'name' : 'Driveradd'})">
                <span>车牌号码：沪B32191</span>
                <span>李敏</span>
                <span>手机：15026818531</span>
              </li>
              <li @click="$router.push({'name' : 'Driveradd'})">
                <span><i>发车时间：</i> 2018-12-24 13：00</span>
                <span><i>6</i>/6-10人</span>
                <span><i>发车地点：</i> 闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
              </li>
              <li>
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="" v-if='!flag'>
                <span>{{secondNum}}/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
              <li>
                <span>报名状态</span>
                <span @click="secondEnroll" v-if='flag'>立即报名</span>
                <span  v-if='!flag' class="btn1">立即报名</span>
              </li>
            </ul>

          </div>
        </swiper-item>
           


         <swiper-item>
          <div class="tab-swiper vux-center">
           <ul class="ul1 ul2 ul3" v-if="flag">
              <li>
                <img src="../../assets/images/car4.png" alt="">
              </li>
              <li>
                <span>GMC1 17豪华商务车</span>
                <span>已发车</span>
              </li>
               <li>
                <span>车牌号码：沪B32191</span>
                <span>李敏</span>
                <span>手机：15026818531</span>
              </li>
              <li>
                <span><i>发车时间：</i> 2018-12-24 13：00</span>
                <span><i>6</i>/6-10人</span>
                <span><i>发车地点：</i> 闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
              </li>
              <li @click="$router.push({'name' : 'Drivershift'})">
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="">
                <span>6/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
              <li>
                <span>报名状态</span>
                <span class="btn1">立即报名</span>
              </li>
            </ul>
          </div>
        </swiper-item>
      </swiper> 
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list: ['全部车辆', '已报名车辆'],
      demo: '全部状态',
      index: 0,
      colFlag: true,
      flag: true,
      firstNum: 0,
      firstSum: 6,
      secondNum: 0,
      secondSum: 6
    }
  },
  methods: {
    enroll: function () {
      // console.log(1111)
      this.$router.push({'name': 'Driveradd'})
      this.flag = !this.flag
      this.firstNum = this.firstSum
      // console.log(this.flag)
    },
    secondEnroll: function () {
      this.$router.push({'name': 'Driveradd'})
      this.colFlag = !this.colFlag
      this.secondNum = this.secondSum
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/cars.scss";
</style>

