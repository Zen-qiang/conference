<template>
  <div class="checkothers_container">
    <div class="first">
      <img :src="info.photo" alt="">
      <div class="box1">
        <p>{{info.userName}}</p>
        <p>{{info.companyName}}</p>
      </div>
    </div>

    <ul>
      <div class="firstli">
          <span class="hui">同行人员</span>
          <span class="hui">{{info.membersSize}}</span>
      </div>
      <li v-for="(item, index) of membersInfo" :key="index">
          <div class="box">
            <span><img :src="item.photo" alt=""></span>
            <span>{{item.name}}</span>
            <span><img :src="src" alt=""></span>
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
      journeyId: this.$route.params.journeyId,
      info: {},
      membersInfo: [],
      src: ''
    }
  },
  created () {
    this.getInfo()
  },
  computed: {
    nowConferenceId () {
      return this.$store.state.nowConferenceId
    },
    nowConferenceName () {
      return this.$store.state.nowConferenceName
    }
  },
  methods: {
    // 默认信息
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
          this.membersInfo.forEach(el => {
            if (el.valueDefault === '女') {
              this.src = '../../static/image/nv.png'
            } else {
              this.src = '../../static/image/nan.png'
            }
          })
        }
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

