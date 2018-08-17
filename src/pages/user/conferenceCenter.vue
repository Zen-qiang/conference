<template>
    <div class="conferenceCenter_container">
       <div class="list list1">
          <div class="inner">
            <div class="first">
              <span>{{currentConference.subject}}</span>
              <span class="now1">当前会务</span>             
            </div>
            <div class="last">
              <img :src="currentConference.conferenceCoverUrl" alt="">
              <p class="col2"><span class="col1">状态：</span> <span></span> <span>{{currentConference.valueDefault}}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">{{currentConference.peopleNum}}</span>人</p>
              <p class="col2"><span class="col1">地址：</span>{{currentConference.address}}</p>
              <p class="col2"><span class="col1">开始：</span>{{currentConference.startTime}}  &nbsp; <span>结束：</span>{{currentConference.endTime}}</p>
            </div>
          </div>
        </div> 


        <ul class="list" v-for="(item, index) of canChangeConferenceList" :key="index">
          <li class="inner">
            <div class="first">
              <span>{{item.subject}}</span>
              <span class="now2" @click="chooseConference(item.id)">切换</span>             
            </div>
              <div class="last">
                <img :src="item.conferenceCoverUrl" alt="">
                <p class="col2"><span class="col1">状态：</span><span></span> <span>{{item.valueDefault}}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="col1">人数：</span><span class="col3">{{item.peopleNum}}</span>人</p>
                <p class="col2"><span class="col1">地址：</span>{{item.address}}</p>
                <p class="col2"><span class="col1">开始：</span>{{item.startTime}}  &nbsp; <span>结束：</span>{{item.endTime}}</p>
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      topList: {},
      lastList: [],
      currentConference: {},
      canChangeConferenceList: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/searchChangeConferenceList',
        params: {
          pageNo: 1,
          pageSize: 100
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.currentConference = res.data.data.currentConference
          this.canChangeConferenceList = res.data.data.canChangeConferenceList
        }
      }).catch(err => {
        console.log(err)
      })
    },
    chooseConference (id) {
      // console.log(id)
      this.axios({
        method: 'post',
        url: '/api/conference/choose/' + id,
        params: {
          // conferenceId: id,
          _method: 'put'
        }
      }).then(res => {
        this.getInfo()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/conferenceCenter.scss";
</style>

