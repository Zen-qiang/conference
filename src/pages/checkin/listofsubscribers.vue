<template>
  <div class="usereport_container">
    <div class="second">
      <img src="../../assets/images/headpic5.png" alt="" width="80px">
      <div class="box1">
        <p>公司：南通鸿翔</p>
        <p>
          <span>姓名：共和时代</span>
          <img src="../../assets/images/nan.png" alt="" style="vertical-align:middle">
        </p>
        <p>岗位：供货部</p>
        <p>手机 ：13935040154</p>
      </div>
      <div class="info">
      </div>
     <ul>
       <li>
         <span>代</span>
          <span>白豆腐 &nbsp;
            <img src="../../assets/images/nan.png" alt="" height="16px" style="vertical-align:middle">
              <!-- <img v-else src="../../assets/images/nv.png" alt=""> -->
          </span>
            
          <span>手机 ：13678987654</span>
              <!-- <P>身份证 ：{{conferenceMembersInfo[index].idNumber}}</P>
              <p>酒店 ：{{conferenceMembersInfo[index].hotelName}}</p>
              <p>房间号 ：{{conferenceMembersInfo[index].hotelNumber}}</p>  -->
        </li>
        <li>
         <span>代</span>
          <span>白豆腐 &nbsp;
            <img src="../../assets/images/nan.png" alt="" height="16px" style="vertical-align:middle">
              <!-- <img v-else src="../../assets/images/nv.png" alt=""> -->
          </span>
            
          <span>手机 ：13678987654</span>
              <!-- <P>身份证 ：{{conferenceMembersInfo[index].idNumber}}</P>
              <p>酒店 ：{{conferenceMembersInfo[index].hotelName}}</p>
              <p>房间号 ：{{conferenceMembersInfo[index].hotelNumber}}</p>  -->
        </li>
      </ul>
    </div>
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
        url: '/api/conference/info'
      }).then(res => {
        console.log(res)
        // if (res.code === 0) {
        //   this.conferenceMembersInfo = res.data.userInfo.members.conferenceMembers
        //   if (this.conferenceMembersInfo.length === 0) {
        //     this.$router.push({name: 'NoMessage'})
        //   } else {
        //     // console.log(res.data.data)
        //     this.masterInfo = res.data.data.masterMember
        //     this.conferenceId = this.masterInfo.conferenceMembersId
        //     this.conferenceName = res.data.data.conferenceName
        //   }
        // }
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
@import  "../../assets/css/rootMessage.scss";
</style>
