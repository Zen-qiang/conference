<template>
  <div class="personalcenter_container">
    <div class="top">
      <img src="../../assets/images/headpic21.png" alt="">
      <p>徐晓东</p>
      <p>天赐服装贸易有限公司</p>
    </div>
    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="70px">
        <tab-item class="vux-center" 
                  :selected="demo2 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
          <span class="icon1">1</span> 
        </tab-item> 
     </tab>
      <swiper v-model="index"  :show-dots="false" height="960px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <div class="list">
              <div class="inner" @click="$router.push({'name' : 'Details'})">
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span class="now1">当前会务</span>
                  
                </div>
                 <div class="last">
                   <img src="../../assets/images/center1.png" alt="">
                   <p class="col2"><span class="col1">状态：</span> <span></span> <span>进行中</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </div>
              <div class="inner">
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span class="now2">切换</span>
                  
                </div>
                 <div class="last">
                   <img src="../../assets/images/center2.png" alt="">
                   <p class="col2"><span class="col1">状态：</span><span class="bg1"></span> <span>未开始</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </div>
              <div class="inner">
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span class="now2">切换</span>
                  
                </div>
                 <div class="last">
                   <img src="../../assets/images/center2.png" alt="">
                   <p class="col2"><span class="col1">状态：</span> <span class="bg2"></span> <span>已结束</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </div>
            </div>
          </div>
          
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            <service></service>
            
          </div>
        </swiper-item> 
        
        <swiper-item>
          <div class="tab-swiper vux-center">
            <div class="list list1">
              <div class="inner" @click="$router.push({'name' : 'Details'})">
                <div class="first">
                  <span>adidas春季魅&黑系列上海订货会</span>
                  <span class="now1">当前会务</span>
                  
                </div>
                 <div class="last">
                   <img src="../../assets/images/center1.png" alt="">
                   <p class="col2"><span class="col1">状态：</span> <span></span> <span>进行中</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">8</span>人</p>
                   <p class="col2"><span class="col1">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
                   <p class="col2"><span class="col1">开始：</span>2018-12-16  &nbsp; <span>结束：</span>2018-12-21</p>
                 </div>
              </div>
            </div>

            <timeline>
			        <timeline-item>
				        <p class="recent col4">[上海市] 行程车辆接送已更新</p>
				        <p class="recent1 col4">2018-12-16 10:00:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">吊牌打印成功</p>
				        <p class="recent1 col1">2018-12-15 06:30:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">全季酒店入住登记成功</p>
				        <p class="recent1 col1">2018-12-14 12:20:00</p>
			        </timeline-item>
		        </timeline> 
            
          </div>
        </swiper-item>
        
      </swiper> 

  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Timeline, TimelineItem } from 'vux'
import service from '../../components/Service.vue'
const list = () => ['所有会务', '当前会务', '最新状态']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Timeline,
    TimelineItem,
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
  @import "../../assets/css/personalcenter.scss";
</style>

