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
                <div class="right" @click="goHotel(item.id, item.name)">
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
              <li v-if="haveHotelInfo !== null">
                <div class="top">
                  <span>{{haveHotelInfo.name}}</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
                </div>
                <div class="left">
                  <img src="../../assets/images/hotel.png" alt="">
                </div>
                <div class="right" @click="$router.push({'name' : 'HotelManage'})">
                  <p><span class="hui">房型：</span> {{haveHotelInfo.roomType}}</p>
                  <p><span class="hui">地址：</span> {{haveHotelInfo.address}}</p>
                  <p><span class="hui">开始：</span>{{haveHotelInfo.startTime}} &nbsp; &nbsp; &nbsp;<span class="hui">结束：</span>{{haveHotelInfo.endTime}}</p>
                </div>
                <div class="bottom" >
                  <span>入住人员</span>
                  <img v-for="(item, index) in haveMemberInfo" :key="index" :src="item.photo" alt="">
                </div>
              </li>
              <li v-else style="background:#f2f2f2;border:none">
                <p style="width:100%;font:17px/60px 微软雅黑;color:#333;text-align:center;">暂时没有数据哦0v0</p>
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
      hotelsInfo: {},
      haveHotelInfo: {},
      haveMemberInfo: [],
      accomMemberList: this.$route.query.accomMemberList
    }
  },
  created () {
    console.log(this.accomMemberList)``
    this.getInfo()
  },
  methods: {
    // 查找酒店
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
    // 点击酒店列表
    goHotel (id, name) {
      this.$store.commit('hotelId', id)
      this.$store.commit('hotelName', name)
      this.$router.push({name: 'HotelManage'})
    },
    // 已入住酒店信息
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/accommodation/searchHotelRoomReserveMembers'
      }).then(res => {
        this.haveHotelInfo = res.data.data.hotelInfo
        this.haveMemberInfo = res.data.data.memberInfo
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

