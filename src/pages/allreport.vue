<template>
  <div class="allreport_container">
    <div class="btn1">
       <img src="../assets/images/saomiao.png" alt="">
       <span>扫描用户</span>
     </div>

  <ul>
    <li>
      <span>全部报名人员</span>
      <span>30</span>
    </li>
     <li>
         <img src="../assets/images/headpic11.png" alt="">
         <div class="left">
           <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>已打印</p>
           <p>补打吊牌</p>
         </div>
       </li> 

       <li>
         <img src="../assets/images/headpic12.png" alt="">
         <div class="left">
           <p>刘小倩 <span>和南国服装</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>已打印</p>
           <p>补打吊牌</p>
         </div>
       </li> 

        <li>
         <img src="../assets/images/headpic15.png" alt="">
         <div class="left">
           <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>已打印</p>
           <p>补打吊牌</p>
         </div>
       </li> 

       <li>
         <img src="../assets/images/headpic16.png" alt="">
         <div class="left">
           <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>已打印</p>
           <p>补打吊牌</p>
         </div>
       </li> 

        <li>
         <img src="../assets/images/headpic17.png" alt="">
         <div class="left">
           <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>已打印</p>
           <p>补打吊牌</p>
         </div>
       </li> 
  </ul>

   <transition name="fade">
    <div class="mask1" @click.stop="dis()" v-show="b">
      <div class="content">
        <img src="../assets/images/dayin.png" alt="">
        <p>正在打印...</p>
        <p><span></span><span></span></p>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      b: false

    }
  },
  methods: {
    print: function () {
      this.b = !this.b
    },
    dis: function () {
      this.b = !this.b
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/allreport.scss";
</style>

