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
              <cell title="到达城市" value="上海" v-show="!flag"></cell>
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" placeholder="12月20日 周三 08：50" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  placeholder="中国航空CA32C2" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <span><img src="../../assets/images/headpic.jpg" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'JourneyManage'})">完成</p>
          </div>
        </swiper-item>

         <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="flag" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="trafficList" v-model="trafficValue" v-show="!flag"></selector>
              <cell title="到达城市" value="广州" v-show="!flag" ></cell>
              <selector title="到达地点" :options="stationList" v-model="stationValue" v-show="!flag"></selector>
              <x-input title="到达时间" placeholder="12月20日 周三 08：50" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
              <x-input title="班次号"  placeholder="中国航空CA32C2" placeholder-align="right" text-align="right" v-show="!flag"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'AddPeople'})">
              <span>同行人员</span>
              <span><img src="../../assets/images/headpic.jpg" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'JourneyManage'})" >完成</p>
          </div>
        </swiper-item>
      </swiper> 
 </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Cell, XSwitch, Group, Selector, XInput } from 'vux'
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
    XInput
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
      flag: false
    }
  },
  methods: {
    onClick: function () {
      this.flag = !this.flag
      // console.log(this.flag)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addJourney.scss";
</style>

