<template>
   <div class="zsgl_container">
       <div class="swi">
          <swiper
          style="width:100%;margin:0 auto;"
            :list="lists" auto
            dots-position="center"
            :show-desc-mask="false"
          ></swiper>
       </div>

       <div class="address" @click="$router.push({'name' : 'Map'})">
         <span>上海全季酒店</span>
         <img src="../../assets/images/address.png" alt="">
       </div>

       <div class="cal">
          <inline-calendar
            ref="calendar"
            @on-change="onChange"
            @on-view-change="onViewChange"
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
          </inline-calendar>
          <input type="btn" value="安排入住" @click="$router.push({'name' : 'Rygl'})">
       </div> 
       <div class="box1">
         <span>入住信息</span>
         <span><i>{{a}}</i>/10人</span>
          <!-- <span><img src="../assets/images/headpic.jpg" alt="" @click="$router.push({'name': 'Rygl'})"></span>
          <span @click="$router.push({'name': 'Rygl'})">more</span>
          <span><img src="../assets/images/jiantou.png" alt=""></span> -->
       </div>
       <div class="box2">
         <p>住宿备注</p>
         <p>本次住宿由XX集团提供，感觉对方立即给肌肤带来感觉了发达国家独领风队你卡数量单价你大夫克罗米芬队价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡数量单价你大夫克罗米芬队你卡</p>
       </div>

   </div>
</template>

<script>
import { Group, Calendar, Swiper, InlineCalendar } from 'vux'
export default {
  components: {
    Group,
    Calendar,
    Swiper,
    InlineCalendar
  },
  data () {
    return {
      a: 0,
      lists: [
        {
          url: 'javascript:',
          img: '/static/image/lb1.jpg'
        },
        {
          url: 'javascript:',
          img: '/static/image/lb2.jpg'
        },
        {
          url: 'javascript:',
          img: '/static/image/bo3.jpg'
        }
      ],
      show: true,
      value: [],
      listValue: '',
      range: false,
      showLastMonth: false,
      showNextMonth: false,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction (date) {
        if (date.formatedDate === '2017-10-16') {
          return true
        }
      }
    }
  },
  methods: {
    onChange (val) {
      console.log('on-change', val)
      if (this.value.length === 3) {
        this.value.shift()
      }
    },
    onViewChange (val, count) {
      console.log('on view change', val, count)
    }
  }
}
</script>

<style lang="sass" scoped>
@import  "../../assets/css/zsgl.scss";
</style>


