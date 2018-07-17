<template>
  <div class="hotellist2_container">
    <div class="btn1">
       <img src="../../assets/images/saomiao.png" alt="">
       <span>扫描用户</span>
    </div>

    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="100px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item> 
        <span class="icon1">2</span> 
        <span class="icon2">58</span>
        <span class="icon3">60</span>
      </tab>
      <swiper v-model="index"  :show-dots="false" height="730px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <img src="../../assets/images/headpic16.png" alt="">
                <div class="left">
                  <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right right2">8140</p>
              </li>
             <li>
                <img src="../../assets/images/headpic17.png" alt="">
                <div class="left">
                  <p>吴亦丽 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right">房间号</p>
              </li>
            </ul>
          </div>
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            <!-- <ul>
              <li>
                <img src="../../assets/images/headpic16.png" alt="">
                <div class="left">
                  <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right right2">8140</p>
              </li>
            </ul> -->
            <ul class="different">
              <li>
                  <img src="../../assets/images/headpic15.png" alt="">
                  <div class="left">
                    <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                    <p>手机：15026818561</p>
                    <p>房间类型：标间 &nbsp; 房间号：8410</p>
                  </div>
                  <div class="right">
                    <p>已报到</p>
                    <p>已住宿</p>
                  </div>
              </li> 
              <li>
                  <img src="../../assets/images/headpic17.png" alt="">
                  <div class="left">
                    <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                    <p>手机：15026818561</p>
                    <p>房间类型：标间 &nbsp; 房间号：8410</p>
                  </div>
                  <div class="right">
                    <p>已报到</p>
                    <p>已住宿</p>
                  </div>
              </li> 
              <li>
                  <img src="../../assets/images/headpic16.png" alt="">
                  <div class="left">
                    <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                    <p>手机：15026818561</p>
                    <p>房间类型：标间 &nbsp; 房间号：8410</p>
                  </div>
                  <div class="right">
                    <p>已报到</p>
                    <p>已住宿</p>
                  </div>
              </li> 
              <li>
                  <img src="../../assets/images/headpic22.png" alt="">
                  <div class="left">
                    <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                    <p>手机：15026818561</p>
                    <p>房间类型：标间 &nbsp; 房间号：8410</p>
                  </div>
                  <div class="right">
                    <p>已报到</p>
                    <p class="red">未住宿</p>
                  </div>
              </li> 
              <li>
                  <img src="../../assets/images/headpic23.png" alt="">
                  <div class="left">
                    <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                    <p>手机：15026818561</p>
                    <p>房间类型：标间 &nbsp; 房间号：8410</p>
                  </div>
                  <div class="right">
                    <p>已报到</p>
                    <p>已住宿</p>
                  </div>
              </li> 
            </ul>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
             <ul>
              <li>
                <img src="../../assets/images/headpic16.png" alt="">
                <div class="left">
                  <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right right2">8140</p>
              </li>
              <li>
                <img src="../../assets/images/headpic16.png" alt="">
                <div class="left">
                  <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right right2">8140</p>
              </li>
              <li>
                <img src="../../assets/images/headpic16.png" alt="">
                <div class="left">
                  <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
                  <p>手机：15026818561</p>
                  <p>房间类型：标间</p>
                </div>
                <p class="right right2">8140</p>
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
      list: ['未登记房间号', '已登记房间号', '所有用户'],
      demo: '未登记房间号',
      index: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/hotellistTwo.scss";
</style>

