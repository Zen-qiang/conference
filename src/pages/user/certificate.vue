<template>
  <div class="certificate_container">
    <div class="content">
      <div class="top"></div>
      <div class="img1">
        <img src="../../assets/images/headpic20.png" alt="">
      </div>
      <p>{{info.name}}</p>
      <p>{{info.companyName}}</p>
      <div class="qrcode">
        <qrcode value="4" type="img"></qrcode>  
      </div>  
    </div>
    <div class="btn1">保存图片</div>
  </div>
</template>

<script>
import { Qrcode } from 'vux'
export default {
  components: {
    Qrcode
  },
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/user/searchPrintDropUserInfo'
      }).then(res => {
        if (res.data.code === 0) {
          this.info = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/certificate.scss";
</style>

