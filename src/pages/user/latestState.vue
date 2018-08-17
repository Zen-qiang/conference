<template>
    <div class="latestState_container">
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

            <timeline>
			        <timeline-item>
				        <p class="recent col4">[上海市] 行程车辆接送已更新</p>
				        <p class="recent1 col4">2018-12-16 10:00:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">吊牌打印成功</p>
				        <p class="recent1 col1">2018-12-15 06:30:00</p>
			        </timeline-item>
			        <timeline-item>
				         <p class="recent col1">全季酒店入住登记成功</p>
				        <p class="recent1 col1">2018-12-14 12:20:00</p>
			        </timeline-item>
		        </timeline> 
    </div>
</template>

<script>
import { Timeline, TimelineItem } from 'vux'
export default {
  components: {
    Timeline,
    TimelineItem
  },
  data () {
    return {
      currentConference: {}
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
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/latestState.scss";
</style>

