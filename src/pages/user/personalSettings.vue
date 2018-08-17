<template>
    <div class="personalSettings_container">
      <div class="top">
        <div class="head">
          <img :src="info.profilePhoto" alt="">
          <p>更换</p>
        </div>  
      </div>
      <ul class="main">
        <li>
          <span>手机绑定</span>
          <span v-if="info.phoneno">已绑定</span>
          <span v-else>未绑定</span>
        </li>
        <li>
          <span>姓名</span>
          <span>{{info.name}}</span>
        </li>
        <li>
          <span>性别</span>
          <span>男</span>
        </li>
        <!-- <li>
          <span>身份证</span>
          <span>310115199110247615</span>
        </li> -->
        <li>
          <span>公司</span>
          <span>{{company.name}}</span>
        </li>
      </ul>
      <div class="bottom" @click="$router.push({name: 'Login'})">
        退出登录
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      info: {},
      company: {}
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/user/findUserInfoByUserId'
      }).then(res => {
        if (res.data.code === 0) {
          this.info = res.data.data
          this.company = this.info.company
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/personalSettings.scss";
</style>
