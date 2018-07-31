<template>
  <div class="usereport_container">
    <div class="first">
      <p>{{conferenceName}}</p>
      <span></span>
    </div>
    <div class="second">
      <img src="../../assets/images/headpic5.png" alt="">
      <div class="box1">
        <p>姓名：{{masterInfo.userName}}</p>
        <p>性别：{{masterInfo.valueDefault}}</p>
        <p>手机 ：{{masterInfo.phoneNo}}</p>
        <!-- <P>身份证 ：{{masterInfo.idNumber}}</P> -->
        <p>酒店：{{masterInfo.hotelName}}</p>
        <p>房间号：{{masterInfo.hotelNumber}}</p>
        <p>报名时间：{{masterInfo.createdTime}}</p>
      </div>
      <p class="phone">手机</p>
      <p class="modify" @click="goEdit()">修改</p>
    </div>
    <div class="bottom">
       <span>已报道</span>
      <span @click="$router.push({'name' : 'JourneyManage'})">查看行程</span>
    </div>
     
     <div class="info">
          <span class="hui">其他成员</span>
          <span class="hui">{{conferenceMembersInfo.length}}</span>
      </div>
     <ul v-for="(item, index) of conferenceMembersInfo" :key="index">
       <li>
          <span class="head"><img src="../../assets/images/headpic22.png" alt=""></span>
          <div class="box">
            <span>{{conferenceMembersInfo[index].userName}} &nbsp; 男 
              <img src="../../assets/images/nan.png" alt="">
              <!-- <img v-else src="../../assets/images/nv.png" alt=""> -->
            </span>
            <span>代</span>
             <span class="phone">手机</span>
            <div class="text">
              <p>手机 ：{{conferenceMembersInfo[index].phoneNo}}</p>
              <!-- <P>身份证 ：{{conferenceMembersInfo[index].idNumber}}</P>
              <p>酒店 ：{{conferenceMembersInfo[index].hotelName}}</p>
              <p>房间号 ：{{conferenceMembersInfo[index].hotelNumber}}</p>  -->
            </div>
          </div>
       </li>
       <li class="bottom">
         <span v-if="conferenceMembersInfo[index].checkin">已报道</span>
         <span v-else class="red">未报道</span>
         <span @click="$router.push({'name' : 'JourneyManage'})">查看行程</span>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      masterInfo: {},
      conferenceMembersInfo: [],
      conferenceId: '',
      conferenceName: ''
    }
  },
  created () {
    this.getMainInfo()
  },
  methods: {
    getMainInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/searchConferenceApplyInfo'
      }).then(res => {
        if (res.data.code === 0) {
          this.conferenceMembersInfo = res.data.data.conferenceMembers
          if (this.conferenceMembersInfo.length === 0) {
            this.$router.push({name: 'NoMessage'})
          } else {
            // console.log(res.data.data)
            this.masterInfo = res.data.data.masterMember
            this.conferenceId = this.masterInfo.conferenceMembersId
            this.conferenceName = res.data.data.conferenceName
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goEdit () {
      this.$router.push({
        name: 'EditRegist',
        query: {
          conferenceId: this.conferenceId,
          conferenceName: this.conferenceName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/usereport.scss";
</style>

