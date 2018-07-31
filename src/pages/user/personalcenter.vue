<template>
  <div class="personalcenter_container">
    <div class="top">
      <div class="img">
        <div class="img1">
          <img :src="info.profilePhoto" alt="">
        </div>
      </div>
      <div class="text">
        <p>{{info.name}}</p>
        <p>{{info.company.name}}</p>
      </div>
      <div class="settings">
        <img src="../../assets/images/settings.png" alt="" @click="$router.push({'name' : 'PersonalSettings'})">
      </div>
    </div>
    <div class="middle">
      <div class="title" @click="$router.push({'name': 'ConferenceCenter'})">
        <p>{{info.defaultConference.subject}}</p>
        <p>切换</p>
      </div>
      <ul>
        <li @click="$router.push({'name': 'Usereport'})">
          <img src="../../assets/images/baoming.svg" alt="">
          <p>报名信息</p>
        </li>
        <li @click="$router.push({'name': 'JourneyManage'})">
          <img src="../../assets/images/xingcheng.svg" alt="">
          <p>行程安排</p>
        </li>
        <li @click="$router.push({'name': 'Cars'})">
          <img src="../../assets/images/cheliang.svg" alt="">
          <p>派车管理</p>
        </li>
        <li @click="$router.push({'name': 'AccommodationManage'})">
          <img src="../../assets/images/zhusu.svg" alt="">
          <p>住宿登记</p>
        </li>
        <li @click="$router.push({'name': 'Diningdetail'})">
          <img src="../../assets/images/yongcan.svg" alt="">
          <p>用餐扫码</p>
        </li>
        <li @click="$router.push({'name': 'Certificate'})">
          <img src="../../assets/images/zhengjian.svg" alt="">
          <p>证件通行</p>
        </li>
      </ul>
    </div>
    <div class="bottom" @click="$router.push({'name': 'LatestState'})">
      <p>最新状态</p>
      <p></p>
      <img src="../../assets/images/jiantouu.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
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
        url: '/api/user/findUserInfoByUserId'
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
  @import "../../assets/css/personalcenter.scss";
</style>



