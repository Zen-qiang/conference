<template>
  <div class="cars_container">
     <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="70px">
        <tab-item class="vux-center" 
                  :selected="demo2 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
        </tab-item> 
      </tab>
      <swiper v-model="index"  :show-dots="false" height="1000px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li>
                <img src="../../assets/images/car1.png" alt="" @click="$router.push({'name' : 'Cars'})">
              </li>
              <li>
                <span>宝骏1 17豪华商务车</span>
                <span>免费</span>
              </li>
              <li>
                <span>中级</span>
                <span>10人</span>
                <span>舒适</span>
              </li>
              <li>
                <span>已使用 &nbsp; 1月25日  &nbsp;3：20结束</span>
                <span><i>6</i>/6-10人</span>
                <span>发车地点：闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
                <span></span>
              </li>
              <li @click="$router.push({'name' : 'Drivershift'})">
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="">
                <span>6/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
            </ul>

             <ul>
              <li>
                <img src="../../assets/images/car4.png" alt="" @click="$router.push({'name' : 'Cars'})">
              </li>
              <li>
                <span>GMC1 17豪华商务车</span>
                <span>免费</span>
              </li>
              <li>
                <span>顶级</span>
                <span>10人</span>
                <span>豪华</span>
              </li>
              <li>
                <span>已使用 &nbsp; 1月25日  &nbsp;3：20结束</span>
                <span><i>6</i>/6-10人</span>
                <span>发车地点：闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
                <span></span>
              </li>
              <li @click="$router.push({'name' : 'Drivershift'})">
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="">
                <span>6/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
            </ul>

             <ul>
              <li>
                <img src="../../assets/images/car4.png" alt="" @click="$router.push({'name' : 'Cars'})">
              </li>
              <li>
                <span>GMC1 17豪华商务车</span>
                <span>免费</span>
              </li>
              <li>
                <span>顶级</span>
                <span>10人</span>
                <span>豪华</span>
              </li>
              <li>
                <span>已使用 &nbsp; 1月25日  &nbsp;3：20结束</span>
                <span><i>6</i>/6-10人</span>
                <span>发车地点：闵行华融路234号中RO路23号45B座</span>
                <span>5.6km</span>
                <span></span>
              </li>
              <li @click="$router.push({'name' : 'Drivershift'})">
                <span>乘客信息</span>
                <img src="../../assets/images/headpic18.png" alt="">
                <span>6/6 </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li>
            </ul>

          </div>
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            
          </div>
        </swiper-item>
      </swiper> 
  </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['全部状态', '全部车辆']
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
      demo2: '全部状态',
      index: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/cars.scss";
</style>

