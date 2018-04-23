<template>
 <div class="tjxc_container">
    <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="60px">
        <tab-item class="vux-center" 
                  :selected="demo2 === item" 
                  v-for="(item, index) in list2" 
                  :key="index">
          {{item}}
        </tab-item>  
    </tab>
      <swiper v-model="index"  :show-dots="false" height="100%">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="value2" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="list3" v-model="defaultValue" v-show="!value2"></selector>
              <cell title="到达城市" value="上海" v-show="!value2"></cell>
              <selector title="到达地点" :options="list4" v-model="defaultValue1" v-show="!value2"></selector>
              <x-input title="到达时间" placeholder="12月20日 周三 08：50" placeholder-align="right" text-align="right" v-show="!value2"></x-input>
              <x-input title="班次号"  placeholder="中国航空CA32C2" placeholder-align="right" text-align="right" v-show="!value2"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'Tjry'})">
              <span>同行人员</span>
              <span><img src="../../assets/images/headpic.jpg" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'Xcgl'})">完成</p>
          </div>
        </swiper-item>

         <swiper-item>
          <div class="tab-swiper vux-center">
            <group>
              <x-switch title="自行解决" style="color:#ababab" prevent-default v-model="value2" @on-click="onClick()"></x-switch>
              <selector title="交通类型" :options="list3" v-model="defaultValue" v-show="!value2"></selector>
              <cell title="到达城市" value="广州" v-show="!value2" ></cell>
              <selector title="到达地点" :options="list4" v-model="defaultValue1" v-show="!value2"></selector>
              <x-input title="到达时间" placeholder="12月20日 周三 08：50" placeholder-align="right" text-align="right" v-show="!value2"></x-input>
              <x-input title="班次号"  placeholder="中国航空CA32C2" placeholder-align="right" text-align="right" v-show="!value2"></x-input>
            </group>
            <div class="last" @click="$router.push({'name' : 'Tjry'})">
              <span>同行人员</span>
              <span><img src="../../assets/images/headpic.jpg" alt=""></span>
            </div>
            <p class="end" @click="$router.push({'name' : 'Xcgl'})" >完成</p>
          </div>
        </swiper-item>
      </swiper> 
 </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Cell, XSwitch, Group, Selector, XInput } from 'vux'
const list = () => ['到站信息', '返程信息']
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
      list2: list(),
      demo2: '到站信息',
      index: 0,
      stringValue: '0',
      defaultValue: 'fj',
      list3: [{key: 'fj', value: '飞机'}, {key: 'dc', value: '动车'}],
      defaultValue1: 'pd',
      list4: [{key: 'pd', value: '浦东南站'}, {key: 'hq', value: '虹桥火车站'}],
      value2: false
    }
  },
  methods: {
    onClick: function () {
      this.value2 = !this.value2
      console.log(this.value2)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/tjxc.scss";
</style>

