<template>
  <div class="report_container">
     <div class="btn1">
       <img src="../../assets/images/saomiao.png" alt="">
       <span>扫描用户</span>
     </div>
     <div class="center">
       <div class="first" @click="$router.push({'name' : 'Reported'})">
         <p>0</p>
         <p>已报道用户清单</p>
       </div>
       <div class="second" @click="$router.push({'name' : 'Allreport'})">
         <p>30</p>
         <p>全部报名人员</p>
       </div>
     </div>
     <ul class="msg">
       <li>
         <img src="../../assets/images/headpic10.png" alt="">
         <div class="left">
           <p>戴佩妮 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <p class="right" @click="print()">打印吊牌</p>
       </li>     
       <li>
         <img src="../../assets/images/headpic11.png" alt="">
         <div class="left">
           <p>刘小倩 <span>和南国服装</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>打印吊牌</p>
         </div>
       </li>   
       <li>
         <img src="../../assets/images/headpic12.png" alt="">
         <div class="left">
           <p>王小美 <span>南小资魅ellie服饰</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间</p>
         </div>
         <div class="right" @click="print()">
           <p>打印吊牌</p>
         </div>
       </li>   
     </ul>
      <!-- <group>
         <x-switch v-model="show" :title="222222"></x-switch>
      </group>
     <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../assets/images/dayin.png" style="max-width:100%">
        </div>
      </x-dialog>
    </div> -->
    <transition name="fade">
    <div class="mask1" @click.stop="dis()" v-show="b">
      <div class="content">
        <img src="../../assets/images/dayin.png" alt="">
        <p>正在打印...</p>
        <p><span></span><span></span></p>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
// import { XDialog, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'
export default {
  // directives: {
  //   TransferDom
  // },
  // components: {
  //   XDialog,
  //   Group,
  //   XSwitch
  // },
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
  @import "../../assets/css/report.scss";
</style>

