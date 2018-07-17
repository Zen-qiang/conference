<template>
   <div class="bmgl_container">
     <tab :line-width=2 active-color='#00aac8' v-model="index" custom-bar-width="60px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item>  
    </tab>
     <div class="swi1">
      <swiper v-model="index"  :show-dots="false" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
              <div class="box box1">
                <div class="left">
                  <img src="../../assets/images/headpic10.png" alt="">
                </div>
                <div class="right">
                  <p>戴佩妮</p>
                  <p>手机 ：15026818561</p>
                  <p>身份证：3101159912047615</p>
                  <p>酒店：上海四季酒店</p>
                  <p>房间号：425</p>
                  <P>报名时间：2018-12-10 23：11</P>
                </div>
                <div class="phone">手机</div>
                <div class="xian"></div>
                <div class="xia" @click="$router.push({'name' : 'JourneyManage'})">
                  <span>已报道</span>
                  <span>查看行程</span>
                </div>    
            </div> 
            <div class="box box2">
                <div class="left">
                  <img src="../../assets/images/headpic11.png" alt="">
                </div>
                <div class="right">
                  <p>王倩</p>
                  <p>手机 ：15026818561</p>
                  <p>身份证：3101159912047615</p>
                  <p>酒店：上海四季酒店</p>
                  <p>房间号：425</p>
                  <P>报名时间：2018-12-10 23：11</P>
                </div>
                <div class="phone">手机</div>
                <div class="xian"></div>
                <div class="xia" @click="$router.push({'name' : 'JourneyManage'})">
                  <span>已报道</span>
                  <span>查看行程</span>
                </div>    
            </div>
          </div>
        </swiper-item>
            
          
         <swiper-item>
            <div class="tab-swiper vux-center">
              <div class="box box1">
                <div class="left">
                  <img src="../../assets/images/headpic10.png" alt="">
                </div>
                <div class="right">
                  <p>戴佩妮</p>
                  <p>手机 ：15026818561</p>
                  <p>身份证：3101159912047615</p>
                  <p>酒店：上海四季酒店</p>
                  <p>房间号：425</p>
                  <P>报名时间：2018-12-10 23：11</P>
                </div>
                <div class="phone">手机</div>
                <div class="xian"></div>
                <div class="xia" @click="$router.push({'name' : 'JourneyManage'})">
                  <span>已报道</span>
                  <span>查看行程</span>
                </div>    
            </div> 
            <div class="box box2">
                <div class="left">
                  <img src="../../assets/images/headpic11.png" alt="">
                </div>
                <div class="right">
                  <p>王倩</p>
                  <p>手机 ：15026818561</p>
                  <p>身份证：3101159912047615</p>
                  <p>酒店：上海四季酒店</p>
                  <p>房间号：425</p>
                  <P>报名时间：2018-12-10 23：11</P>
                </div>
                <div class="phone">手机</div>
                <div class="xian"></div>
                <div class="xia" @click="$router.push({'name' : 'JourneyManage'})">
                  <span>已报道</span>
                  <span>查看行程</span>
                </div>    
            </div>
          </div>
        </swiper-item>
      </swiper> 
    </div>
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
      list: ['已报到', '所有客户'],
      demo: '已报到',
      index: 0
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/css/enrollManage.scss";
</style>

