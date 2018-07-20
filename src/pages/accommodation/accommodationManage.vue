<template>
  <div class="zsgl1_container">
     <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="70px">
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
            <div class="main">
              <group>
                <calendar  v-model="firstTime" :title="'请选择起始时间'" show-popup-header :popup-header-title="'请选择起始日期'"></calendar>
                <calendar  v-model="lastTime" :title="'请选择截止时间'" show-popup-header :popup-header-title="'请选择截止日期'"></calendar>
             </group> 
             <input type="button" value="筛选酒店" @click="searchHotel">
          </div>

            <ul class="extra" v-for ="(item, index) of hotelsInfo" :key ="index">
              <li>
                <div class="top">
                  <span>{{item.name}}</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
                </div>
                <div class="left">
                  <!-- ../../assets/images/hotel.png -->
                  <img :src="item.photo" alt="">
                </div>
                <div class="right" @click="getHotelInfo(item.id)">
                  <p><span class="hui">房型：</span> {{item.roomType}}</p>
                  <p><span class="hui">地址：</span>{{item.address}}</p>
                  <p><span class="hui">开始：</span>{{item.startTime | formatDate}} &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>{{item.endTime | formatDate}}</p>
                </div>
              </li>
            </ul>
          </div>
        </swiper-item>
         
          
         <swiper-item>
          <div class="tab-swiper vux-center">
             <ul class="extra extra1">
              <li>
                <div class="top">
                  <span>如家快捷酒店</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
                </div>
                <div class="left">
                  <img src="../../assets/images/hotel.png" alt="">
                </div>
                <div class="right" @click="$router.push({'name' : 'HotelManage'})">
                  <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
                  <p><span class="hui">地址：</span>人民路</p>
                  <p><span class="hui">开始：</span>2018-12-16 &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>2018-12-21</p>
                </div>
                <div class="bottom" @click="$router.push({'name': 'Haslived'})">
                  <span>入住人员</span>
                  <img src="../../assets/images/headpic.jpg" alt="">
                </div>
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
import { formatDate } from '../../assets/js/date.js'
export default {
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
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
      firstTime: 'TODAY',
      lastTime: 'TODAY',
      flag: false,
      list: ['安排入住', '已经入住'],
      demo: '安排入住',
      index: 0,
      hotelsInfo: {}
    }
  },
  methods: {
    searchHotel () {
      this.axios({
        method: 'get',
        url: '/api/accommodation/hotels',
        params: {
          startTime: String(this.firstTime) + ' ' + '00:00:00',
          endTime: String(this.lastTime) + ' ' + '00:00:00'
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.hotelsInfo = res.data.data
          console.log(this.hotelsInfo)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getHotelInfo (id) {
      this.axios({
        method: 'get',
        url: '/api/accommodation/hotelInfo/' + id,
        params: {
          hotelId: id
        }
      }).then(res => {
        if (res.data.code === 0) {
          let hotelDetail = res.data.data
          console.log(res.data.data)
          this.$router.push({
            name: 'HotelManage',
            query: {
              hotelName: hotelDetail.name
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/accommodationManage.scss";
</style>

