<template>
   <div class="bmcg_container">
       <ul class="out">
           <li>
              <ul class="inner">
                <li><img src="../../assets/images/dui2.png" alt=""></li>
                <li><p>恭喜您报名成功！</p></li>
                <li><p>长按关注我们，以便及时获取最新状态</p></li>
                <li>
                  <qrcode value="" type="img"></qrcode>
                </li>
             </ul> 
           </li>
           <!-- <li class="outli2" >
               <span>报名信息</span>
               <span>10人</span>
           </li> -->
           <!-- 1.报名管理跳转 -->
           <!-- <li class="outli3" @click="$router.push({'name' : 'EnrollManage'})">
               <span><img src="../../assets/images/headpic4.jpg" alt=""></span>
               <span><img src="../../assets/images/jiantou.png" alt=""></span>
           </li> -->
       </ul>
        <p class="anpai" @click="$router.push({'name' : 'Addroute'})">安排我的行程</p>
   </div>
</template>

<script>
import { Qrcode } from 'vux'
export default {
  data () {
    return {
      conferenceId: this.$route.query.meettingId,
      QRcode: '',
      picStatus: ''
    }
  },
  components: {
    Qrcode
  },
  created () {
    // this.getPicStatus()
  },
  methods: {
    // 拿二维码
    // getPicStatus () {
    //   this.axios({
    //     method: 'get',
    //     url: '/api/conference/searchApplySuccessMemberInfo',
    //     params: {
    //       conferenceId: this.conferenceId
    //     }
    //   }).then(res => {
    //     if (res.data.code === 0) {
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style lang="sass" scoped>
@import  "../../assets/css/enrollSuccess.scss";
</style>

