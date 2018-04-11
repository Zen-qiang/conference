<template>
  <div class="personalcenter_container">
    <div class="top">
      <img src="../assets/images/headpic21.png" alt="">
      <p>徐晓东</p>
      <p>天赐服装贸易有限公司</p>
    </div>
    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="80px">
        <tab-item class="vux-center" 
                  :selected="demo2 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
          <span class="icon1">1</span> 
        </tab-item> 
     </tab>
      <swiper v-model="index"  :show-dots="false" height="940px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span>进行中</span>
                  <span></span>
                </div>
                 <div class="last">
                   <img src="../assets/images/center1.png" alt="">
                   <p class="col2"><span class="col1">状态：</span>已报名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col3">人数：</span><span>8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </li>
              <li>
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span>进行中</span>
                  <span></span>
                </div>
                 <div class="last">
                   <img src="../assets/images/center2.png" alt="">
                   <p class="col2"><span class="col1">状态：</span>已报名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col3">人数：</span><span>8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </li>
            </ul>
          </div>
        </swiper-item>
           
        <swiper-item>
          <div class="tab-swiper vux-center">
            <service></service>
          </div>
        </swiper-item>

        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span>进行中</span>
                  <span></span>
                </div>
                 <div class="last">
                   <img src="../assets/images/center1.png" alt="">
                   <p class="col2"><span class="col1">状态：</span>已报名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col3">人数：</span><span>8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
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
import service from '../components/Service.vue'
const list = () => ['所有会务', '当前会务', '最新状态']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    service
  },
  data () {
    return {
      list2: list(),
      demo2: '所有会务',
      index: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/personalcenter.scss";
</style>

