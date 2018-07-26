<template>
  <div class="checkothers_container">
    <div class="first">
      <img :src="info.photo" alt="">
      <div class="box1">
        <p>{{info.userName}}</p>
        <p>{{info.companyName}}</p>
      </div>
      <p class="modify" @click="$router.push({'name' : 'ApplyRegist'})">修改</p>
    </div>

    <ul>
      <div class="firstli">
          <span class="hui">其他成员</span>
          <span class="hui">{{info.membersSize}}</span>
      </div>
      <li v-for="(item, index) of membersInfo" :key="index">
          <div class="close"><img src="../../assets/images/cha.png" alt="" @click="deleteMember(item.journeyMemberId)"></div>
          <div class="box">
            <span><img :src="item.photo" alt=""></span>
            <span>{{item.name}}</span>
            <span>{{item.valueDefault}} <img src="../../assets/images/nan.png" alt=""></span>
            <span>代</span>
            <div class="text">
              <p>手机 ：{{item.phoneNo}}</p>
              <!-- <P>身份证 ：{{item.idNumber}}</P>
              <p>酒店 ：{{item.hotelName}}</p>
              <P>房间类型 ：{{item.roomType}}</P>
              <p>房间序号 ： {{item.room_seq}}</p>  -->
            </div>
          </div>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      journeyId: this.$route.query.journeyId,
      info: {},
      membersInfo: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/journey/searchJourneyMembersInfo',
        params: {
          journeyId: this.journeyId
        }
      }).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.info = res.data.data
          this.membersInfo = this.info.membersInfo
        }
      }).catch(err => {
        console.log(err)
      })
    },
    deleteMember (id) {
      this.axios({
        method: 'post',
        url: '/api/journey/deleteJourneyMember',
        params: {
          _method: 'delete',
          journeyMemberId: id
        }
      }).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/checkothers.scss";
</style>

