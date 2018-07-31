<template>
  <div class="drivershift_container">
     <!-- <div class="btn1">
       <img src="../../assets/images/saomiao.png" alt="">
       <span>扫描用户</span>
     </div> -->

      <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="100px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item> 
        <span class="icon1">{{haveRide.length}}</span> 
        <span class="icon2">{{noRide.length}}</span>
      </tab>
      <swiper v-model="index"  :show-dots="false" height="730px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li v-if="haveRide.length" v-for="(item, index) of haveRide" :key="'haveRide' + index">
                <img :src="item.photo" alt="">
                <div class="left">
                  <p>{{item.name}} <span>{{item.companyName}}</span></p>
                  <p>手机：{{item.phoneNo}}</p>
                </div>
                <div class="right">
                  <p>已乘车</p>
               </div>
              </li>
            </ul>
          </div>
        </swiper-item>
           
         <swiper-item>
          <div class="tab-swiper vux-center">
            <ul>
              <li v-if="noRide.length" v-for="(item, index) of noRide" :key="'noRide' + index">
                <img :src="item.photo" alt="">
                <div class="left">
                  <p>{{item.name}}  &nbsp;<span>{{item.companyName}}</span></p>
                  <p>手机：{{item.phoneNo}}</p>
                </div>
                <div class="right right1">
                  <p>未乘车</p>
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
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list: ['已乘车', '未乘车'],
      demo: '已乘车',
      index: 0,
      haveRide: [],
      noRide: [],
      shiftsId: this.$route.query.shiftsId
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.axios({
        methods: 'get',
        url: '/api/dispatching/searchVehiclesShiftsMembersIsReady',
        params: {
          shiftsId: this.shiftsId
        }
      }).then(res => {
        if (res.data.code === 0) {
          let allInfo = res.data.data
          this.haveRide = allInfo.isReady
          this.noRide = allInfo.isNotReady
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/drivershift.scss";
</style>

