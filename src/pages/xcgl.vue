<template>
  <div class="xcgl_container">
     <ul class="tabs">
        <li class="li-tab" v-for="(item,index) in tabsParam" @click="toggleTabs(index)"
        :class="{active:index!=nowIndex,active1:index===nowIndex}">
          {{item}}
        </li>
        <img src="../assets/images/jia2.png" alt="" class="pic" @click="$router.push({'name' : 'Tjry'})">
    </ul>
    <div class="divTab" v-show="nowIndex===0">
       <div class="box">
         <div class="content">
           <div class="left">
            <img src="../assets/images/headpic11.png" alt="">
          </div>
          <div class="center">
            <p>12月20日 &nbsp;周三</p>
            <p></p>
            <img src="../assets/images/sanjiaoxing.png" alt="">
            <p>中国国航CA3202</p>
          </div>
          <div class="right">
            <p>上海</p>
            <p>虹桥T3</p>
            <p>08:50</p>
            <p>预计到达 08:50</p>
          </div>
       </div>
        <div class="xia" @click="$router.push({'name' : 'Checkothers'})">
         <span>其他成员 &nbsp;</span>
         <span><i>{{a}}</i>人</span>
         <span><img src="../assets/images/headpic.jpg" alt=""></span>
         <span>more</span>
      </div>
     </div>

       <div class="box">
         <div class="content">
           <div class="left">
            <img src="../assets/images/headpic12.png" alt="">
          </div>
          <div class="center">
            <p>12月20日 &nbsp;周三</p>
            <p></p>
            <img src="../assets/images/sanjiaoxing.png" alt="">
            <p>自行解决</p>
          </div>
          <div class="right">
            <p>上海</p>
            <p>/</p>
            <p>待定</p>
            <p>/</p>
          </div>
       </div>
        <div class="xia">
         <span>其他成员 &nbsp;</span>
         <span><i>{{b}}</i>人</span>
         <!-- <span><img src="../assets/images/headpic.jpg" alt=""></span> -->
         <span>/</span>
      </div>
     </div>
    </div>
    <div class="divTab divTab2" v-show="nowIndex===1">
      <div class="box">
         <div class="content">
           <div class="left">
            <img src="../assets/images/headpic13.png" alt="">
          </div>
          <div class="center">
            <p>12月20日 &nbsp;周三</p>
            <p></p>
            <p></p>
            <p>和谐号KB4403</p>
          </div>
          <div class="right">
            <p>上海</p>
            <p>南站T2</p>
            <p>14:20</p>
            <p>预计离开 14:20</p>
          </div>
       </div>
        <div class="xia" @click="$router.push({'name' : 'Checkothers'})">
         <span>其他成员 &nbsp;</span>
         <span><i>{{a}}</i>人</span>
         <span><img src="../assets/images/headpic14.png" alt=""></span>
         <span>more</span>
      </div>
     </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabsParam: ['到站信息', '返程信息'],
      nowIndex: 0,
      a: 8,
      b: 0
    }
  },
  methods: {
    toggleTabs: function (index) {
      this.nowIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/xcgl.scss";
</style>

