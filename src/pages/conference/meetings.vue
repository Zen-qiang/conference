<template>
  <div>
     <!-- <my-nav></my-nav> -->
     <div class="meetings_container">
        <ul class="text">
          <li v-for="(item, index) of status" 
              :key="index">
            <div class="content">
              <div class="left">
                  <img src="../../assets/images/left1.png" alt="">
              </div>
              <div class="right" @click="getState(index)">
                  <img :src= status[index].conferenceCoverUrl alt="">
                  <h2>{{status[index].subject}}</h2>
                  <p><span></span> &nbsp;{{status[index].valueDefault}}</p>
                  <p>{{status[index].description}}</p>
                  <!-- <p>此次阿迪达斯魅&黑2018秋冬新品延续了品牌产品一贯的优秀品质与颜值，不管是鞋类还是服装类，在设计上都推陈出新，搭配上更注重整体理念，将材质、织法、剪裁、配色等特点融入服饰的款式中，鞋类产品新BOUNCE、BOOST与CLOUDFOAM缓震材质的嵌入，为羽毛球运动的每一步移动提供更好的能量传递与推动，使阿迪达斯羽毛球系列产品的鞋底风潮...</p> -->
              </div>
         </div>
          </li>
        </ul>    
     </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      num: '',
      status: [],
      meetingId: ''
    }
  },
  created () {
    this.getMeetingStatus()
    console.log(this.$store.state.currentUser)
    console.log(this.$store.state.version)
  },
  methods: {
    getState (index) {
      this.$store.commit('nowConferenceId', this.status[index].id)
      this.$router.push({
        name: 'Details',
        query: {
          meettingId: this.status[index].id
        }
      })
    },
    getMeetingStatus () {
      this.axios({
        method: 'get',
        url: '/api/conference/list'
      }).then(res => {
        if (res.data.code === 0) {
          this.status = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/meetings.scss";
</style>


