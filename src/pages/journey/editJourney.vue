<template>
 <div class="tjxc_container">
    <tab :line-width=2 active-color='#00aac9' v-model="index1" custom-bar-width="60px" >
        <tab-item class="vux-center" 
                  v-for="(item, index1) in list"
                  :key="index1"
                  :selected="nowIndex === index1" 
                  :disabled="index1 !== nowIndex">
          {{item}}
        </tab-item>  
    </tab>
      <swiper v-model="index1"  :show-dots="false" height="100%" >
        <swiper-item v-if="nowIndex===0">
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="ArriveTrafficValue" v-show="!flag"></selector>
              <!-- <x-address :title="title" v-model="addressValue" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="showAddress"></x-address> -->
              <x-input title="到达城市"  v-model="arriveCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
               <!-- <x-address title="地址选择" v-model="addressValue" placeholder="请输入到达城市" raw-value :list="addressData" value-text-align="right"></x-address> -->
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" :value="arriveTimeValue |formatDate" placeholder="请输入到达时间" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号" v-model="arriveOrder" placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="changeArriveSelect()">
              <span>同行人员</span>
              <span>
                <img v-if="member.length" src="member[0].photo" alt="">
                <img v-else src="" alt="">
              </span>
            </div>
            <!-- <p class="end" @click="$router.push({'name' : 'JourneyManage'})">完成</p> -->
          </div>
        </swiper-item>

         <swiper-item v-if="nowIndex===1">
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag1" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="DepartTrafficValue" v-show="!flag"></selector>
              <!-- <cell title="到达城市"  v-model="departCity" v-show="!flag" ></cell> -->
              <x-input title="到达城市"  v-model="departCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <selector title="到达地点" :options="stationList" v-model="stationValue1" v-show="!flag"></selector>
              <x-input title="到达时间" :value="journey.departTime |formatDate" v-model="departTimeValue" placeholder="请输入到达时间"  placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  v-model="departOrder" placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="changeArriveSelect()">
              <span>同行人员</span>
              <span><img :src="member.length?member[0].photo:''" alt=""></span>
            </div>
          </div>
        </swiper-item>
      </swiper> 
      <!-- $router.push({'name' : 'JourneyManage'}) -->
      <p class="end" @click="changeMassage()" >完成</p>
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
      index1: 0,
      stringValue: '0',
      ArriveTrafficValue: '',
      DepartTrafficValue: '',
      trafficList: [],
      stationValue: '浦东南站',
      stationValue1: '浦东南站',
      stationList: [{key: '浦东南站', value: '浦东南站'}, {key: '虹桥火车站', value: '虹桥火车站'}],
      flag: false,
      flag1: false,
      addressData: ChinaAddressData,
      addressValue: [],
      journeyId: this.$route.query.journeyId,
      journey: {},
      member: [],
      photo: '',
      nowIndex: this.$route.query.nowIndex,
      statusFlag: this.$route.query.statusFlag,
      departTimeValue: '',
      departOrder: '',
      departCity: '',
      arriveTimeValue: '',
      arriveOrder: '',
      arriveCity: '',
      fkUserId: this.$store.state.userInfo.id,
      From: '',
      nowConferenceId: this.$store.state.userInfo.defaultConference.id
    }
  },
  created () {
    this.getTrafficList()
    if (this.statusFlag) {
      if (this.journeyInfo) {
        this.ArriveTrafficValue = this.journeyInfo.arrive.fkVehiclesId
        this.arriveCity = this.journeyInfo.arrive.arriveCity
        this.stationValue = this.journeyInfo.arrive.arrivePlace
        this.arriveTimeValue = this.journeyInfo.arrive.arriveTime
        this.arriveOrder = this.journeyInfo.arrive.numberOfRuns

        this.DepartTrafficValue = this.journeyInfo.depart.fkVehiclesId
        this.departCity = this.journeyInfo.depart.departCity
        this.stationValue1 = this.journeyInfo.depart.departPlace
        this.departTimeValue = this.journeyInfo.depart.departTime
        this.departOrder = this.journeyInfo.depart.numberOfRuns
      }
    } else {
      this.getStatus()
    }
  },
  computed: {
    select: function () {
      // console.log(this.$store.state.selectConferenceMembersId)
      return this.$store.state.selectConferenceMembersId
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    journeyInfo () {
      return this.$store.state.journeyInfo
    }
    // ...mapGetters({
    //   selectConferenceMembersId: 'getSelectConferenceMembersId'
    // })
  },
  methods: {
    onClick: function () {
      this.journey.isHandleByOneself = !this.journey.isHandleByOneself
      this.flag = !this.flag
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
          this.arriveCity = this.journey.arriveCity
          this.arriveTimeValue = this.journey.arriveTime
          this.arriveOrder = this.journey.numberOfRuns
          this.ArriveTrafficValue = this.journey.fkVehiclesId
          this.departCity = this.journey.departCity
          this.departTimeValue = this.journey.departTime
          this.departOrder = this.journey.numberOfRuns
          this.DepartTrafficValue = this.journey.fkVehiclesId
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 完成修改提交
    changeMassage () {
      let date = new Date()
      let arriveJourney = JSON.stringify([{
        'fkConferenceId': this.nowConferenceId,
        'arriveCity': this.arriveCity,
        'arrivePlace': this.stationValue,
        'arriveTime': this.arriveTimeValue,
        'createdTime': date,
        'fkUserId': this.fkUserId,
        'fkVehiclesId': this.ArriveTrafficValue,
        'id': this.journeyId ? this.journeyId : 0,
        'isHandleByOneself': this.flag,
        'journeyType': 'ARRIVE',
        'numberOfRuns': this.arriveOrder
      }])
      let departJourney = JSON.stringify([{
        'fkConferenceId': this.nowConferenceId,
        'departCity': this.departCity,
        'departPlace': this.stationValue1,
        'departTime': this.departTimeValue,
        'createdTime': date,
        'fkUserId': this.fkUserId,
        'fkVehiclesId': this.DepartTrafficValue,
        'id': this.journeyId ? this.journeyId : 0,
        'isHandleByOneself': this.flag1,
        'journeyType': 'DEPART',
        'numberOfRuns': this.departOrder
      }])
      let arrivePeople = []
      let departPeople = []
      if (this.journeyInfo) {
        arrivePeople = this.journeyInfo.arrive.people
        departPeople = this.journeyInfo.depart.people
        console.log(arrivePeople)
      } else {
        arrivePeople = this.select
        departPeople = this.select
      }
      if (this.nowIndex === 0) {
        console.log(this.nowIndex)
        this.axios({
          method: 'post',
          url: '/api/journey/addJourney',
          data: {
            journey: arriveJourney,
            'memberIds[]': arrivePeople
          },
          params: {
            _method: 'put'
          }
        }).then(res => {
          // console.log(res.data.data)
          this.$router.push({name: 'JourneyManage'})
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log(this.nowIndex)
        this.axios({
          method: 'post',
          url: '/api/journey/addJourney',
          data: {
            journey: departJourney,
            'departMemberIds[]': departPeople
          },
          params: {
            _method: 'put'
          }
        }).then(res => {
          // console.log(res.data.data)
          this.$router.push({name: 'JourneyManage'})
        }).catch(err => {
          console.log(err)
        })
      }
    },
    // 获得列表
    getList (keyword, list) {
      let self = this
      if (list.length) return
      this.axios({
        method: 'get',
        url: '/api/list/properties',
        params: {
          group: keyword
        }
      }).then(res => {
        if (res.data.code === 0) {
          let newlist = res.data.data
          for (var i = 0; i < newlist.length; i++) {
            // this.singleList.key = this.list[i].propKey
            // this.singleList.value = this.list[i].value)
            let singleList = {
              'key': newlist[i].id,
              'value': newlist[i].value
            }
            // this.$set(this.data,”key”,value’) $set()方法，既可以新增属性,又可以触发视图更新
            this.$set(list, i, singleList)
          }
          self.ArriveTrafficValue = list[0].key
          self.DepartTrafficValue = list[0].key
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取交通列表
    getTrafficList () {
      this.getList('VEHICLES_TYPE', this.trafficList)
    },
     // 改变到达人员
    changeArriveSelect () {
      if (this.nowIndex === 0) {
        this.From = 'Arrive'
      } else {
        this.From = 'Depart'
      }
      // if (!this.journeyInfo) {
      this.journeyList = {
        from: this.From,
        arrive: {
          'fkVehiclesId': this.ArriveTrafficValue,
          'arriveCity': this.arriveCity,
          'arrivePlace': this.stationValue,
          'arriveTime': this.arriveTimeValue,
          'numberOfRuns': this.arriveOrder,
          'people': this.select
        },
        depart: {
          'fkVehiclesId': this.DepartTrafficValue,
          'departCity': this.departCity,
          'departPlace': this.stationValue1,
          'departTime': this.departTimeValue,
          'numberOfRuns': this.departOrder,
          'people': this.select
        }
      }
      this.$store.commit('journeyInfo', this.journeyList)
      // } else {
      //   this.journeyInfo.from = this.From
      //   this.$store.commit('journeyInfo', this.journeyInfo)
      // }
      this.$router.push({
        name: 'AddPeople',
        query: {
          nowIndex: this.nowIndex,
          journeyId: this.journeyId
        }
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
