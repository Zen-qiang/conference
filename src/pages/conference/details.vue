<template>
  <div class="details_container">
          <ul class="box1">
              <li>
                  <img :src="conferenceInfo.conferenceCoverUrl" alt="">
              </li>
              <li><p>{{conferenceInfo.subject}}</p></li>
              <li>
                  <span>状态</span>
                  <span>{{conferenceInfo.valueDefault}}</span>
                  <span></span>
              </li>
              <li>
                  <span>品牌商</span>
                  <span>{{conferenceInfo.name}}</span>
                  <span><img src="../../assets/images/dui.png" alt=""></span>
              </li>
              <li>
                  <span>时间</span>
                  <span>{{conferenceInfo.timeRange}}</span>
              </li>
              <!-- 点击地址显示定位（通用）- -->
               <li>
                  <span>地址</span>
                  <span>{{conferenceInfo.address}}</span>
                  <span><img src="../../assets/images/address.png" alt=""></span>
              </li>
          </ul>

          <ul>
              <li>
                  <span>报名信息</span>
                  <span>已报名<i>{{userInfo.number}}</i>人</span>
                   <!-- <span><img src="../../assets/images/headpic.jpg" alt=""></span>
                   <span>more</span>
                   <span><img src="../../assets/images/jiantou.png" alt=""></span> -->
              </li>
              <li v-if="userRole != 'root' && userInfo.number === 0">
                  <span>经销商</span>
                  <span>{{userInfo.companyName}}</span>
              </li>
               <li v-if="userRole != 'root'">
                  <span>报名状态</span>
                  <span class="red">{{userInfo.status}}</span>
              </li>
          </ul>

          <div class="intro">
              <p>会议信息</p>
              <p>{{conferenceInfo.description}}</p>
              <!-- <p>此次阿迪达斯魅&黑2018秋冬新品延续了品牌产品一贯的优秀品质与颜值，不管是鞋类还是服装类，在设计上都推陈出新，搭配上更注重整体理念，将材质、织法、剪裁、配色等特点融入服饰的款式中，鞋类产品新BOUNCE、BOOST与CLOUDFOAM缓震材质的嵌入，为羽毛球运动的每一步移动提供更好的能量传递与推动，使阿迪达斯羽毛球系列产品的鞋底</p> -->
          </div>

          <div class="btn2"  v-if="userRole !=='root'">
            <p v-if="userInfo.number === 0" @click="go()">
              <span class="itemall"> 
                <img src="../../assets/images/shenqing.png" alt="">
                 申请报名
              </span>
            </p>         
            <p v-else>
              <span class="itemleft white" @click="cancelApply()">
                <img src="../../assets/images/quxiao.png" alt="">
                取消报名
              </span>
              <span class="itemright" @click="go()">
                <img src="../../assets/images/shenqing.png" alt="">
                修改报名
              </span>
            </p>
              <!-- <img src="../../assets/images/shenqing.png" alt="">
              <p v-if="userInfo.number === 0">申请报名</p>
              <p v-else>修改报名</p> -->
          </div>
         
   </div>
</template>

<script>
export default{
  data () {
    return {
      a: 0,
      userRole: '',
      userInfo: {},
      conferenceInfo: {},
      conferenceId: this.$route.query.meettingId,
      meettingId: this.$route.query.meettingId,
      meetting: '',
      conferenceName: '',
      replaceList: this.$store.state.replaceList
    }
  },
  created () {
    this.userRole = this.$store.state.currentUser.roleSet[0]
    // console.log(this.userRole)
    // this.getParams()
    this.getConferenceInfo()
    this.chooseConference()
  },
  watch: {
    '$route': 'getParams'
  },
  computed: {
    replaceInfo () {
      return this.$store.state.replaceList
    },
    nowConferenceId () {
      return this.$store.state.nowConferenceId
    }
  },
  methods: {
    go () {
      this.replaceList = []
      this.$store.commit('replaceList', this.replaceList)
      if (this.userInfo.number > 0) {
        this.$router.push({
          name: 'EditRegist',
          query: {
            meettingId: this.meettingId,
            conferenceName: this.conferenceName
          }
        })
      } else {
        this.$router.push({
          name: 'ApplyRegist',
          query: {
            meettingId: this.conferenceId,
            meetting: this.meetting
          }
        })
      }
    },
    // 取路由带过来的参数
    getParams () {
      var routerParams = this.$route.query.meettingId
      this.conferenceId = routerParams
    },
    getConferenceInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/info/' + this.conferenceId
      }).then(res => {
        if (res.data.code === 0) {
          this.conferenceInfo = res.data.data.conferenceDetails
          this.userInfo = res.data.data.userInfo
          this.meetting = this.conferenceInfo.subject
          this.conferenceName = this.meetting
        }
      }).catch(err => {
        console.log(err)
      })
    },
    chooseConference () {
      // console.log('chooseConference')
      this.axios({
        method: 'post',
        url: '/api/conference/choose/' + this.conferenceId,
        params: {
          _method: 'put'
        }
        // url: `/api/conference/choose/${this.conferenceId}`
        // params: {
        //   conferenceId: this.conferenceId
        // },
      }).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 取消报名
    cancelApply () {
      this.axios({
        method: 'post',
        url: '/api/conference/withdrawn',
        params: {
          conferenceId: this.nowConferenceId
        }
      }).then(res => {
        this.$router.push({name: 'Meetings'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/details.scss";
</style>

