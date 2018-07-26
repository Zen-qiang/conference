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
              <selector title="交通类型" v-model="ArriveTrafficValue" :options="trafficList" v-show="!flag"></selector>
              <!-- <cell title="到达城市" value="上海" v-show="!flag"></cell> -->
              <x-input title="到达城市"  v-model="arriveCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <!-- <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address> -->
              <selector title="到达地点" v-model="stationValue" :options="stationList" v-show="!flag"></selector>
              <x-input title="到达时间" placeholder="请输入到达时间" v-model="arriveTimeValue" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  placeholder="请输入班次号" v-model="arriveOrder" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last">
              <span>同行人员</span>
              <!-- <span><img src="../../assets/images/headpic.jpg" alt=""></span> -->
              <ul @click="changeArriveSelect()">
                <li v-for="(item, index) of userPic" :key="index">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
            <!-- <div  v-transfer-dom>
              <x-dialog class="dialog-demo" v-model="show" hide-on-blur>
                <p class="title" style="height:44px;font:15px/44px 微软雅黑; border-bottom:1px solid #ccc;color:#333;text-align:left;padding-left:10px;">到站同行人员</p>
                <div class="img-box" style="height:280px;padding:15px;overflow:scroll;-webkit-overflow-scrolling:touch;">
                  <p>0v0</p>
                </div>
                <div @click="show=false">
                  <span class="vux-close"></span>
                </div>
              </x-dialog>
           </div> -->

          </div>
        </swiper-item>

         <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag1" @on-click="onClick()"></x-switch>
              <selector title="交通类型" v-model="DepartTrafficValue" :options="trafficList" v-show="!flag1"></selector>
              <!-- <cell title="到达城市" value="广州" v-show="!flag" ></cell> -->
              <x-input title="到达城市"  v-model="departCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag1"></x-input>
              <selector title="到达地点" v-model="stationValue1" :options="stationList1" v-show="!flag1"></selector>
              <x-input title="到达时间" v-model="departTimeValue" placeholder="请输入到达时间" placeholder-align="right" text-align="right" v-show="!flag1"></x-input>
              <x-input title="班次号"  v-model="departOrder" placeholder="请输入班次号" placeholder-align="right" text-align="right" v-show="!flag1"></x-input>
            </group>
            <!-- @click="$router.push({'name' : 'AddPeople'})" -->
            <div class="last" >
              <span>同行人员</span>
              <ul @click="changeArriveSelect()">
                <li v-for="(item, index) of userPic" :key="index">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
          </div>
        </swiper-item>
      </swiper> 
      <p class="end" @click="addMessage()" >完成</p>
 </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Cell, XSwitch, Group, Selector, XInput, XAddress, ChinaAddressData, XDialog, TransferDomDirective as TransferDom } from 'vux'
// import { mapGetters } from 'vuex'
export default {
  directives: {
    TransferDom
  },
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
    XAddress,
    XDialog
  },
  data () {
    return {
      list: ['到站信息', '返程信息'],
      demo: '到站信息',
      index: 0,
      stringValue: '0',
      ArriveTrafficValue: '',
      DepartTrafficValue: '',
      trafficList: [],
      stationValue: '浦东南站',
      stationList: [{key: '浦东南站', value: '浦东南站'}, {key: '虹桥火车站', value: '虹桥火车站'}],
      stationValue1: '浦东南站',
      stationList1: [{key: '浦东南站', value: '浦东南站'}, {key: '虹桥火车站', value: '虹桥火车站'}],
      flag: false,
      flag1: false,
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      userPic: this.$route.query.userPic,
      departTimeValue: '',
      departOrder: '',
      departCity: '',
      arriveTimeValue: '',
      arriveOrder: '',
      arriveCity: '',
      fkUserId: this.$store.state.userInfo.id,
      nowConferenceId: this.$store.state.nowConferenceId,
      show: false,
      // journeyInfo: null,
      From: 'Arrive'
    }
  },
  computed: {
    select: function () {
      // console.log(this.$store.state.selectConferenceMembersId)
      return this.$store.state.selectConferenceMembersId
    },
    userInfo () {
      return this.$store.state.userInfo.defaultConference.fkUserId
    },
    getnowConferenceId () {
      return this.$store.state.nowConferenceId
    },
    journeyInfo () {
      return this.$store.state.journeyInfo
    }
    // ...mapGetters({
    //   selectConferenceMembersId: 'getSelectConferenceMembersId'
    // })
  },
  created () {
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
    this.getTrafficList()
    // console.log(this.$store.state.nowConferenceId)
  },
  methods: {
    onClick: function () {
      this.flag = !this.flag
    },
    // 添加信息跳转
    addMessage () {
      let date = new Date()
      let journeyList = JSON.stringify([{
        'arriveCity': this.arriveCity,
        'arrivePlace': this.stationValue,
        'arriveTime': this.arriveTimeValue,
        'createdTime': date,
        'fkConferenceId': this.nowConferenceId,
        'fkUserId': this.fkUserId,
        'fkVehiclesId': this.ArriveTrafficValue,
        'id': 0,
        'isHandleByOneself': this.flag,
        'journeyType': 'ARRIVE',
        'numberOfRuns': this.arriveOrder
      },
      {
        'departCity': this.departCity,
        'departPlace': this.stationValue1,
        'departTime': this.departTimeValue,
        'createdTime': date,
        'fkConferenceId': this.nowConferenceId,
        'fkUserId': this.fkUserId,
        'fkVehiclesId': this.DepartTrafficValue,
        'id': 0,
        'isHandleByOneself': this.flag1,
        'journeyType': 'DEPART',
        'numberOfRuns': this.departOrder
      }
      ])
      let arrivePeople = []
      let departPeople = []
      if (this.journeyInfo) {
        arrivePeople = this.journeyInfo.arrive.people
        departPeople = this.journeyInfo.depart.people
      } else {
        arrivePeople = this.select
        departPeople = this.select
      }
      this.axios({
        method: 'post',
        url: '/api/journey/addJourney',
        data: {
          journey: journeyList,
          'memberIds[]': arrivePeople,
          'departMemberIds[]': departPeople
        },
        params: {
          _method: 'put'
        }
      }).then(res => {
        // console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
      this.$router.push({name: 'JourneyManage'})
    },
    // 获得下拉列表
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
      if (this.index === 0) {
        this.From = 'Arrive'
      } else {
        this.From = 'Depart'
      }
      if (!this.journeyInfo) {
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
      } else {
        this.journeyInfo.from = this.From
        this.$store.commit('journeyInfo', this.journeyInfo)
      }
      this.$router.push({name: 'AddPeople'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addJourney.scss";
  .vux-x-dialog {
    .weui-dialog {
      // text-align: left !important;
      .title{
        width: 100%;
        height: 40px !important;
        color: red;
      }
      .img-box{
        p{
          color: red !important;
        }
      }
    }
  }
</style>

