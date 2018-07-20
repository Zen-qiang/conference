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
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="trafficValue" v-show="!flag"></selector>
              <!-- <cell title="到达城市" value="上海" v-show="!flag"></cell> -->
              <x-input title="到达城市"  placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <!-- <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address> -->
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" placeholder="请输入到达时间" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <!-- <span><img src="../../assets/images/headpic.jpg" alt=""></span> -->
              <ul>
                <li v-for="(item, index) of userPic" :key="index">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
            <p class="end" @click="addMessage()">完成</p>
          </div>
        </swiper-item>

         <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="trafficValue" v-show="!flag"></selector>
              <!-- <cell title="到达城市" value="广州" v-show="!flag" ></cell> -->
              <x-input title="到达城市"  placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" v-model="departTimeValue" placeholder="请输入到达时间" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <ul>
                <li v-for="(item, index) of userPic" :key="index">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
            <p class="end" @click="addMessage()" >完成</p>
          </div>
        </swiper-item>
      </swiper> 
 </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Cell, XSwitch, Group, Selector, XInput, XAddress, ChinaAddressData } from 'vux'
// import { mapGetters } from 'vuex'
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
  computed: {
    select: function () {
      return this.$store.state.selectConferenceMembersId
    }
    // ...mapGetters({
    //   selectConferenceMembersId: 'getSelectConferenceMembersId'
    // })
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
      userPic: this.$route.query.userPic,
      departTimeValue: '',
      departOrder: '',
      departCity: '',
      arriveTimeValue: '',
      arriveOrder: '',
      arriveCity: ''
    }
  },
  methods: {
    onClick: function () {
      this.flag = !this.flag
      // console.log(this.flag)
    },
    addMessage () {
      this.axios({
        _method: 'put',
        url: '/api/journey/addJourney',
        data: {
          journeyList: {
            arriveCity: 'string',
            arrivePlace: 'string',
            arriveTime: '2018-07-20T01:29:49.269Z',
            createdTime: '2018-07-20T01:29:49.269Z',
            departCity: 'string',
            departPlace: 'string',
            departTime: '2018-07-20T01:29:49.269Z',
            fkConferenceId: 0,
            fkUserId: 0,
            fkVehiclesId: 0,
            id: 0,
            isHandleByOneself: true,
            journeyType: 'string',
            numberOfRuns: 'string'
          },
          memberIds: this.select
        }
      }).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
      this.$router.push({name: 'JourneyManage'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addJourney.scss";
</style>

