<template>
 <div class="tjxc_container">
    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="60px">
        <tab-item class="vux-center" 
                  :selected="nowIndex === index" 
                  v-for="(item, index) in list" 
                  :key="index" disabled>
          {{item}}
        </tab-item>  
    </tab>
      <swiper v-model="index" :show-dots="false" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag" @on-click="onClick"></x-switch>
              <selector title="交通类型" v-model="ArriveTrafficValue" :options="trafficList" v-show="!flag"></selector>
              <!-- <cell title="到达城市" value="上海" v-show="!flag"></cell> -->
              <x-input title="到达城市" required v-model="arriveCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <!-- <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address> -->
              <x-input title="到达地点" required v-model="stationValue" placeholder="请输入到达地点" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <calendar :title="'到达时间'" required v-model="arriveTimeValue" v-show="!flag" show-popup-header :popup-header-title="'请选择到站时间'"></calendar>
              <x-input title="班次号" required placeholder="请输入班次号" v-model="arriveTrafic" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last">
              <span>同行人员</span>
              <!-- <span><img src="../../assets/images/headpic.jpg" alt=""></span> -->
              <ul @click="changeArriveSelect()">
                <li v-for="(item, index) in member" :key="index">
                  <!-- {{item.photo}} -->
                  <img :src="'' + item.photo + ''" alt="">
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
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="check" @on-click="onCheck"></x-switch>
              <selector title="交通类型" v-model="DepartTrafficValue" :options="trafficList" v-show="!check"></selector>
              <!-- <cell title="到达城市" value="广州" v-show="!flag" ></cell> -->
              <x-input title="到达城市" required v-model="departCity" placeholder="请输入到达城市" placeholder-align="right" text-align="right" v-show="!check"></x-input>
              <x-input title="到达地点" required v-model="stationValue1" placeholder="请输入到达地点" placeholder-align="right" text-align="right" v-show="!check"></x-input>
              <calendar :title="'到达时间'" required v-model="departTimeValue" v-show="!check" show-popup-header :popup-header-title="'请选择到站时间'"></calendar>
             <x-input title="班次号"  v-model="departOrder" placeholder="请输入班次号" placeholder-align="right" required text-align="right" v-show="!check"></x-input>
            </group>
            <!-- @click="$router.push({'name' : 'AddPeople'})" -->
            <div class="last" >
              <span>同行人员</span>
              <ul @click="changeArriveSelect()">
                <li v-for="(item, index) in member" :key="index">
                  <img :src="'' + item.photo + ''" alt="">
                </li>
              </ul>
            </div>
          </div>
        </swiper-item>
      </swiper> 
      <p class="end" @click="addMessage()" >完成</p>
      <toast v-model="show2" type="text" position = "middle">{{$t('message.check')}}</toast>
 </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Cell, Toast, XSwitch, Group, Selector, XInput, XAddress, ChinaAddressData, XDialog, Calendar, TransferDomDirective as TransferDom } from 'vux'
// import { mapGetters } from 'vuex'
export default {
  // name: 'calender',
  directives: {
    TransferDom
  },
  components: {
    Tab,
    TabItem,
    SwiperItem,
    Cell,
    Group,
    XSwitch,
    Selector,
    XInput,
    XAddress,
    XDialog,
    Calendar,
    Toast,
    Swiper
  },
  data () {
    return {
      list: ['到站信息', '返程信息'],
      index: this.$route.params.nowIndex,
      stringValue: '0',
      ArriveTrafficValue: '',
      DepartTrafficValue: '',
      trafficList: [],
      nowIndex: this.$route.params.nowIndex,
      flag: false,
      check: false,
      stationValue: '',
      stationValue1: '',
      journeyId: this.$route.params.journeyId,
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      departTimeValue: 'TODAY',
      departOrder: '',
      departCity: '',
      arriveTimeValue: 'TODAY',
      arriveTrafic: '',
      arriveCity: '',
      fkUserId: this.$store.state.userInfo.id,
      statusFlag: this.$route.params.statusFlag,
      nowConferenceId: this.$store.state.userInfo.defaultConference.id,
      show: false,
      addPeopleFlag: true,
      show2: false,
      member: []
      // addPeopleFlag1: this.this.$route.query.addPeopleFlag
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
    journeyInfo: {
      get () {
        return this.$store.state.journeyInfo
      },
      set (newVal) {
        this.$store.state.journeyInfo = newVal
      }
    }
    // ...mapGetters({
    //   selectConferenceMembersId: 'getSelectConferenceMembersId'
    // })
  },
  created () {
    // this.nowIndex = this.index
    this.getTrafficList()
    // 判断是从哪里进入
    // console.log(Object.keys(this.journeyInfo).length)
    if (this.statusFlag) {
      if (Object.keys(this.journeyInfo).length > 0) {
        this.ArriveTrafficValue = this.journeyInfo.arrive.fkVehiclesId
        this.arriveCity = this.journeyInfo.arrive.arriveCity
        this.stationValue = this.journeyInfo.arrive.arrivePlace
        this.arriveTimeValue = this.journeyInfo.arrive.arriveTime
        this.arriveTrafic = this.journeyInfo.arrive.numberOfRuns
        this.DepartTrafficValue = this.journeyInfo.depart.fkVehiclesId
        this.departCity = this.journeyInfo.depart.departCity
        this.stationValue1 = this.journeyInfo.depart.departPlace
        this.departTimeValue = this.journeyInfo.depart.departTime
        this.departOrder = this.journeyInfo.depart.numberOfRuns
        if (this.journeyInfo.arrive.people.length > 0) {
          this.member = this.journeyInfo.arrive.people
        } else if (this.journeyInfo.depart.people.length > 0) {
          this.member = this.journeyInfo.depart.people
        }
      }
    } else {
      this.getStatus()
    }
    // console.log(this.$store.state.nowConferenceId)
    // this.$bus.on('add123', this.getAdd123)
  },
  // destroyed () {
  //   this.$bus.off()
  // },
  methods: {
    // getAdd123 (val) {
    //   console.log(val)
    // },
    onClick () {
      this.flag = !this.flag
    },
    onCheck () {
      this.check = !this.check
    },
    // 获得交通类型
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
    getStatus () {
      let self = this
      if (this.nowIndex === 0) {
        this.axios({
          method: 'get',
          url: '/api/journey/searchDataUpdateJourney',
          params: {
            journeyId: this.journeyId
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.journey = res.data.data.journey
            // console.log(this.info)
            this.arriveCity = this.journey.arriveCity
            this.stationValue = this.journey.arrivePlace
            this.arriveTimeValue = this.journey.arriveTime
            this.arriveTrafic = this.journey.numberOfRuns
            this.ArriveTrafficValue = this.journey.fkVehiclesId
            this.$nextTick().then(function () {
              self.member = res.data.data.members
            })
            // this.journeyInfo.members = this.member
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.axios({
          method: 'get',
          url: '/api/journey/searchDataUpdateJourney',
          params: {
            journeyId: this.journeyId
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.journey = res.data.data.journey
            // console.log(this.info)
            this.member = res.data.data.members
            this.departCity = this.journey.departCity
            this.stationValue1 = this.journey.departPlace
            this.departTimeValue = this.journey.departTime
            this.departOrder = this.journey.numberOfRuns
            this.DepartTrafficValue = this.journey.fkVehiclesId
            this.$nextTick().then(function () {
              self.member = res.data.data.members
            })
            // this.journeyInfo.members = this.member
            // this.$bus.emit('getMember', this.member)
            // this.$store.commit('journeyInfo', this.journeyInfo)
          }
        }).catch(err => {
          console.log(err)
        })
      }
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
          'numberOfRuns': this.arriveTrafic,
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
      // console.log(this.arriveTimeValue)
      // 编辑进入页面
      if (!this.statusFlag) {
        this.$store.state.member = this.member
      } else {
        this.$store.commit('member', [])
      }
      // 分别传递到达和返回的时间
      if (this.nowIndex === 0) {
        this.$router.push({
          name: 'AddPeople',
          params: {
            journeyId: this.journeyId,
            // appointTime: this.arriveTimeValue,
            nowIndex: this.nowIndex,
            statusFlag: this.statusFlag
          }
        })
      } else {
        this.$router.push({
          name: 'AddPeople',
          params: {
            journeyId: this.journeyId,
            // appointTime: this.departTimeValue,
            nowIndex: this.nowIndex,
            statusFlag: this.statusFlag
          }
        })
      }
    },
    // 修改信息
    changeMessage () {

    },
    // 添加信息跳转
    addMessage () {
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
        'numberOfRuns': this.arriveTrafic
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
      let arrIds = []
      let departIds = []
      if (Object.keys(this.journeyInfo).length > 0) {
        // 如果有缓存在判断应该放在回程还是返程
        if (this.journeyInfo.arrive.people.length > 0) {
          for (let i = 0, l = this.journeyInfo.arrive.people.length; i < l; i++) {
            arrIds.push(this.journeyInfo.arrive.people[i].id)
          }
        } else if (this.journeyInfo.depart.people.length > 0) {
          for (let i = 0, l = this.journeyInfo.depart.people.length; i < l; i++) {
            departIds.push(this.journeyInfo.depart.people[i].id)
          }
        }
        arrivePeople = arrIds
        departPeople = departIds
      } else if (!this.statusFlag) {
        // 否则就直接从数据库获取
        this.member.forEach(el => {
          arrIds.push(el.id)
          departIds.push(el.id)
        })
        arrivePeople = arrIds
        departPeople = departIds
      }
      console.log(arrivePeople)
      if (this.nowIndex === 0 && this.arriveCity && this.arriveTimeValue && this.arriveTrafic) {
        this.axios({
          method: 'post',
          url: '/api/journey/addJourney',
          data: {
            journey: arriveJourney,
            journeyId: this.journeyId ? this.journeyId : null,
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
      } else if (this.nowIndex === 1 && this.departCity && this.departTimeValue && this.departOrder) {
        console.log(this.nowIndex)
        this.axios({
          method: 'post',
          url: '/api/journey/addJourney',
          data: {
            journey: departJourney,
            journeyId: this.journeyId ? this.journeyId : null,
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
      } else {
        this.show2 = true
      }
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

