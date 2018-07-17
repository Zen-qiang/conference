<template>
  <div class="dining_container">
      <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="70px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item> 
    </tab>
      <swiper v-model="index"  :show-dots="false" height="750px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li @click="$router.push({'name' : 'Diningdetail'})">
                <img src="../../assets/images/breakfast.png" alt="">
                <p class="col1">上海繁聚德贸易有限公司</p>
                <p class="col1">仅限上海全季酒店陆家嘴店使用 <br/>其他门店无效...</p>
                <p class="col2">周一至周五 08：00-10：00 <br/>2018.1.23 - 2018.1.27</p>
              </li>
              <li>
                <img src="../../assets/images/lunch.png" alt="">
                <p>上海繁聚德贸易有限公司</p>
                <p class="col3">仅限上海全季酒店陆家嘴店使用 <br/>其他门店无效...</p>
                <p class="col4">周一至周五 08：00-10：00 <br/>2018.1.23 - 2018.1.27</p>
              </li>
              <li>
                <img src="../../assets/images/dinner.png" alt="">
                <p>上海繁聚德贸易有限公司</p>
                <p class="col3">仅限上海全季酒店陆家嘴店使用 <br/>其他门店无效...</p>
                <p class="col4">周一至周五 08：00-10：00 <br/>2018.1.23 - 2018.1.27</p>
              </li>
            </ul>
          </div>
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
            
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
      list: ['未使用', '已使用', '自创建'],
      demo: '未使用',
      index: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/dining.scss";
</style>
