<template>
  <div class="zsgl1_container">
     <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="70px">
        <tab-item class="vux-center" 
                  :selected="demo3 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
        </tab-item>  
    </tab>
    <div class="swi1">
      <swiper v-model="index"  :show-dots="false" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <div class="main">
              <group>
                <calendar  v-model="demo1" :title="'请选择起始时间'" show-popup-header :popup-header-title="'请选择起始日期'"></calendar>
                <calendar  v-model="demo2" :title="'请选择截止时间'" show-popup-header :popup-header-title="'请选择截止日期'"></calendar>
             </group> 
             <input type="button" value="筛选酒店" @click="flag = !flag">
          </div>

            <ul class="extra">
              <li>
                <span>上海全季酒店（陆家嘴店）</span>
                <span><img src="../../assets/images/address.png" alt=""></span>
              </li>
              <li @click="$router.push({'name' : 'Zsgl'})">
                <div class="left">
                  <img src="../../assets/images/hotel.png" alt="">
                </div>
                <div class="right">
                  <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
                  <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                  <p><span class="hui">开始：</span>2018-12-16 &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>2018-12-21</p>
                </div>
              </li>
              <li>
                <span>上海全季酒店（陆家嘴店）</span>
                <span><img src="../../assets/images/address.png" alt=""></span>
              </li>
              <li>
                <div class="left">
                  <img src="../../assets/images/hotel.png" alt="">
                </div>
                <div class="right">
                  <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
                  <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                  <p><span class="hui">开始：</span>2018-12-16 &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>2018-12-21</p>
                </div>
              </li>
              <li>
                <span>上海全季酒店（陆家嘴店）</span>
                <span><img src="../../assets/images/address.png" alt=""></span>
              </li>
              <li>
                <div class="left">
                  <img src="../../assets/images/hotel.png" alt="">
                </div>
                <div class="right">
                  <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
                  <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                  <p><span class="hui">开始：</span>2018-12-16 &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>2018-12-21</p>
                </div>
              </li>
            </ul>
          </div>
        </swiper-item>
         
          
         <swiper-item>
          <div class="tab-swiper vux-center">
            <ul class="extra extra1">
                <li>
                  <span>上海全季酒店（陆家嘴店）</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
                </li>
                <li @click="$router.push({'name' : 'Zsgl'})">
                  <div class="left">
                    <img src="../../assets/images/hotel.png" alt="">
                  </div>
                  <div class="right">
                    <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
                    <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                    <p><span class="hui">开始：</span>2018-12-16 &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>2018-12-21</p>
                  </div>
                </li>
                <li @click="$router.push({'name': 'Staylist'})">
                    <span>入住人员</span>
                    <span><img src="../../assets/images/headpic.jpg" alt=""></span>
                </li>
                <x-button @click.native ="$router.push({'name': 'Cars'})">安排接送车辆</x-button>
              </ul>
          </div>
        </swiper-item>
      </swiper> 
    </div>
     
      
    
  </div>
</template>

<script>
import { Group, Calendar, InlineCalendar, Tab, TabItem, Swiper, SwiperItem, XButton } from 'vux'
const list = () => ['安排入住', '已经入住']
export default {
  components: {
    Calendar,
    Group,
    InlineCalendar,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    XButton
  },
  data () {
    return {
      readonly: false,
      demo1: 'TODAY',
      demo2: 'TODAY',
      flag: false,
      list2: list(),
      demo3: '安排入住',
      index: 0
    }
  },
  methods: {
    // onChange (val) {
    //   console.log('on-change', val)
    //   if (this.value.length === 3) {
    //     this.value.shift()
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/zsgl1.scss";
</style>

