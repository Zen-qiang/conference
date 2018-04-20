<template>
  <div class="zsgl1_container">
    <div class="main">
          <!-- <inline-calendar
            ref="calendar"
            @on-change="onChange"
            class="inline-calendar-demo"
            :show.sync="show"
            v-model="value"
            start-date="2016-04-01"
            end-date="2018-05-30"
            :range="range"
            :show-last-month="showLastMonth"
            :show-next-month="showNextMonth"
            :highlight-weekend="highlightWeekend"
            :return-six-rows="return6Rows"
            :hide-header="hideHeader"
            :hide-week-list="hideWeekList"
            :replace-text-list="replaceTextList"
            :weeks-list="weeksList"
            :render-function="buildSlotFn"
            :disable-past="disablePast"
            :disable-future="disableFuture"
            :disable-weekend="disableWeekend"
            :disable-date-function="disableDateFunction">
          </inline-calendar> -->
    <group>
      <calendar  v-model="demo1" :title="'请选择起始时间'" show-popup-header :popup-header-title="'请选择日期'"></calendar>
      <calendar  v-model="demo2" :title="'请选择截止时间'" show-popup-header :popup-header-title="'请选择日期'"></calendar>
    </group> 
    <input type="button" value="筛选酒店" @click="flag = !flag">
    </div>

    <ul class="extra">
      <li>
        <span>上海全季酒店（陆家嘴店）</span>
        <span><img src="../../assets/images/address.png" alt=""></span>
      </li>
      <li @click="$router.push({'name' : 'Zsgl'})">
        <div class="left">
          <img src="../../assets/images/hotel.png" alt="">
        </div>
        <div class="right">
          <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
          <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
          <p><span class="hui">开始：</span>2018-12-16 &nbsp; <span class="hui">结束：</span>2018-12-21</p>
        </div>
      </li>
      <li>
        <span>上海全季酒店（陆家嘴店）</span>
        <span><img src="../../assets/images/address.png" alt=""></span>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/images/hotel.png" alt="">
        </div>
        <div class="right">
          <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
          <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
          <p><span class="hui">开始：</span>2018-12-16 &nbsp; <span class="hui">结束：</span>2018-12-21</p>
        </div>
      </li>
      <li>
        <span>上海全季酒店（陆家嘴店）</span>
        <span><img src="../../assets/images/address.png" alt=""></span>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/images/hotel.png" alt="">
        </div>
        <div class="right">
          <p><span class="hui">房型：</span> 大床；双人；三人；标间</p>
          <p><span class="hui">地址：</span>上海市陆家嘴碧海青天大厦32F</p>
          <p><span class="hui">开始：</span>2018-12-16 &nbsp; <span class="hui">结束：</span>2018-12-21</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Group, Calendar, InlineCalendar } from 'vux'
export default {
  components: {
    Calendar,
    Group,
    InlineCalendar
  },
  data () {
    return {
      readonly: false,
      demo1: 'TODAY',
      demo2: 'TODAY',
      flag: false
    }
  },
  methods: {
    // onChange (val) {
    //   console.log('on-change', val)
    //   if (this.value.length === 3) {
    //     this.value.shift()
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/zsgl1.scss";
</style>

