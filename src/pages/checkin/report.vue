<template>
  <div class="report_container">
     <div class="btn1" @click="wxReport()">
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
import wx from 'weixin-js-sdk'
// import $ from 'jquery'
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
  created () {
    console.log(location.href)
    console.log(location.href.split('#')[0])
  },
  methods: {
    print: function () {
      this.b = !this.b
    },
    dis: function () {
      this.b = !this.b
    },
    wxReport () {
      alert('HAHAH')
      // wx.scanQRCode({
      //   needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      //   scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      //   success: function (res) {
      //     var result = res.resultStr   // 当needResult 为 1 时，扫码返回的结果
      //     console.log(result)
      //     alert('QQQQQ')
      //   },
      //   error: function (res) {
      //     alert('RRRRRR')
      //   }
      // })
      // this.axios({
      //   method: 'get',
      //   url: 'http://101.132.119.127:5566/zmf/getConfig',
      //   params: {
      //     url: location.href.split('#')[0]
      //   }
      // }).then(data => {
      //   console.log(data)
      //   wx.config({
      //     // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //     debug: false,
      //     // 必填，公众号的唯一标识
      //     appId: data.data.appId,
      //     // 必填，生成签名的时间戳
      //     timestamp: data.data.timestamp,
      //     // 必填，生成签名的随机串
      //     nonceStr: data.data.nonceStr,
      //     // 必填，签名
      //     signature: data.data.signature,
      //     // 必填，需要使用的JS接口列表，所有JS接口列表
      //     jsApiList: ['checkJsApi', 'scanQRCode']
      //   })
      // })
      // $.get('http://101.132.119.127:5566/zmf/getConfig', function(data){
      //   var jsondata=$.parseJSON(data);
      //       wx.config({
      //           // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //           debug: false,
      //           // 必填，公众号的唯一标识
      //           appId: jsondata.model.appId,
      //           // 必填，生成签名的时间戳
      //           timestamp: '' + jsondata.model.timestamp,
      //           // 必填，生成签名的随机串
      //           nonceStr: jsondata.model.nonceStr,
      //           // 必填，签名
      //           signature: jsondata.model.signature,
      //           // 必填，需要使用的JS接口列表，所有JS接口列表
      //           jsApiList: ['checkJsApi', 'scanQRCode']
      //       })
      //   })
      wx.error(function (res) {
        alert('出错了：' + res.errMsg)// 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
      })
      wx.ready(function () {
        wx.checkJsApi({
          jsApiList: ['scanQRCode'],
          success: function (res) {}
        })
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ['qrCode'], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
            alert('扫描结果：' + result)
            // window.location.href = result;
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/report.scss";
</style>

