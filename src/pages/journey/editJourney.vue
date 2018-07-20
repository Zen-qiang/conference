<template>
 <div class="tjxc_container">
    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="60px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item>  
    </tab>
      <swiper v-model="index"  :show-dots="false" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="journey.isHandleByOneself" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="trafficValue" v-show="!flag"></selector>
              <cell title="到达城市" :value="journey.arriveCity" v-show="!flag"></cell>
               <!-- <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address> -->
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" :value="journey.arriveTime |formatDate" placeholder="请输入到达时间" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号" :value="journey.numberOfRuns" placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <span><img :src="member.length?member[0].photo:''" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'JourneyManage'})">完成</p>
          </div>
        </swiper-item>

         <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="journey.isHandleByOneself" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="trafficValue" v-show="!flag"></selector>
              <cell title="到达城市" :value="journey.departCity" v-show="!flag" ></cell>
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" :value="journey.departTime |formatDate" placeholder="请输入到达时间"  placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号" :value="journey.numberOfRuns" placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <span><img :src="member.length?member[0].photo:''" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'JourneyManage'})" >完成</p>
          </div>
        </swiper-item>
      </swiper> 
 </div>
</template>

<script>
import { formatDate } from '../../assets/js/date.js'
import { Tab, TabItem, Swiper, SwiperItem, Cell, XSwitch, Group, Selector, XInput, XAddress, ChinaAddressData } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Cell,
    Group,
    XSwitch,
    Selector,
    XInput,
    XAddress
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  data () {
    return {
      list: ['到站信息', '返程信息'],
      demo: '到站信息',
      index: 0,
      stringValue: '0',
      trafficValue: 'fj',
      trafficList: [{key: 'fj', value: '飞机'}, {key: 'dc', value: '动车'}],
      stationValue: 'pd',
      stationList: [{key: 'pd', value: '浦东南站'}, {key: 'hq', value: '虹桥火车站'}],
      flag: false,
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      journeyId: this.$route.query.journeyId,
      journey: {},
      member: [],
      photo: ''
    }
  },
  created () {
    this.getStatus()
  },
  methods: {
    onClick: function () {
      this.journey.isHandleByOneself = !this.journey.isHandleByOneself
      this.flag = !this.flag
      // console.log(this.flag)
    },
    getStatus () {
      this.axios({
        method: 'get',
        url: '/api/journey/searchDataUpdateJourney',
        params: {
          journeyId: this.journeyId
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.journey = res.data.data.journey
          this.member = res.data.data.members
          // this.photo = this.member[0].photo
          // console.log(this.member[0].photo)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addJourney.scss";
  .last{
    span:last-of-type {
      width: 100px;
      height: 100%;
      float: right;
      img{
        margin-top: 5px;
        float: right;
        width: 38px;
        object-fit: contain;
      }
    }
  }
</style>
