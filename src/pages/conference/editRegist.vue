<template>
    <div class="sqbm_container">
        <div class="first" @click="$router.push({'name': 'Details'})"> 
            <p>{{conferenceName}}</p>
            <span></span>
        </div>
        <ul>
            <li>
                <span class="hui">报名信息</span>
                <span><img src="../../assets/images/jia.png" alt=""></span>
                <span @click="$router.push({'name': 'ReplaceEroll'})">添加代报名</span>
            </li>
            <li>
              <group>
                <x-input title="经销商" name="companyname" placeholder="请输入公司名称" v-model="companyname" is-type="china" placeholder-align="right" text-align="right" :show-clear="false"></x-input>
              </group>
            </li>
            <li>
                <group>
                <x-input title="姓名" name="username" placeholder="请输入姓名" v-model="username" :max="5" is-type="china-name" placeholder-align="right" text-align="right" :show-clear="false"></x-input>
              </group>
            </li>
            <li>
                <group>
                     <selector title="岗位" :options="jobList" v-model="defaultValue"></selector>
                </group>
            </li>
            <li>
                <span>照片</span>
                <span class="img1"><img :src="masterInfo.photo" alt=""></span>
                <!-- <span class="hui">将用于证件打印</span> -->
                <!-- <a href="javascript:;" class="upload">将用于证件打印
                  <input type="file" multiple="multiple" accept="image/*" capture="camera" class="change">
               </a> -->
                
                <!-- <span class="cam" v-if="!imageUrl"><img src="../../assets/images/camera.png" alt=""></span> -->
            </li>
            <li class="phone">
              <group>
                <x-input title="手机"  name="mobile" placeholder="请输入手机号码"  v-model="phone" :max="11" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right" :show-clear="false"></x-input>
              </group> 
            </li>
            <li class="cel2">
                <group>
                    <selector title="性别" :options="sexList" v-model="defaultValue1"></selector>
                </group>
            </li>
        </ul>
        <ul class="dbm">
            <div class="firstdiv">
                <span class="hui">代报名成员</span>
                <span class="hui">{{membersInfo.length}}</span>
            </div>
            <li v-for="(item, index) of membersInfo" :key="index" v-if="membersInfo[index] !== ''">
                <div class="close"><img src="../../assets/images/cha.png" alt="" @click="deleteReplace(index)"></div>
                <div class="box">
                  <span><img :src="item.photo" alt=""></span>
                  <span>{{item.name}}</span>
                  <span>{{item.fkGenderId}}
                    <img v-if="item.fkGenderId === '男'" src="../../assets/images/nan.png" alt="">
                    <img v-else src="../../assets/images/nv.png" alt="">
                  </span>
                  <span>代</span>
                  <span><img src="../../assets/images/write.png" alt=""></span> 
                  <div class="text">
                    <p>手机 ：{{item.phoneNo}}</p>
                  </div>
                </div>
            </li>
        </ul>
        <p class="apply" @click="finishEdit()">修改完成</p>
    </div>
</template>

<script>
import { Group, Selector, XInput } from 'vux'
export default {
  components: {
    Group,
    Selector,
    XInput
  },
  data () {
    return {
      defaultValue: '',
      sexList: [],
      defaultValue1: '',
      jobList: [],
      companyname: '',
      username: '',
      phone: '',
      card: '',
      list: '',
      singleList: {},
      keyword: '',
      replaceList: this.$store.state.replaceList,
      imageUrl: '',
      masterInfo: {},
      membersInfo: [],
      dataList: [],
      meettingId: this.$route.query.meettingId,
      conferenceId: this.$route.query.conferenceId,
      conferenceName: this.$route.query.conferenceName,
      fkUserId: this.$store.state.userInfo.defaultConference.fkUserId
    }
  },
  created () {
    this.getInfo()
    this.getSexlist()
    this.getJoblist()
    // console.log(this.$store.state.replaceList)
  },
  computed: {
    replaceInfo () {
      return this.$store.state.replaceList
    },
    userInfo () {
      return this.$store.state.userInfo.defaultConference.fkUserId
    }
  },
  methods: {
    // 提交报名列表
    sub () {
      this.dataList.push({
        'fkGenderId': this.defaultValue1,
        'fkUserId': this.fkUserId,
        'master': true,
        'name': this.username,
        'phoneNo': this.phone,
        'fkPosition': this.defaultValue
      })
      for (var i in this.replaceList) {
        this.dataList.push(this.replaceList[i])
      }
      this.axios({
        method: 'post',
        url: '/api/conference/enter',
        params: {
          conferenceId: this.conferenceId,
          conferenceMemberViews: JSON.stringify(this.dataList)
        }
      }).then((res) => {
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    // 获取下拉列表
    getList (keyword, list) {
      // let self = this
      if (list.length) return
      this.axios({
        method: 'get',
        url: '/api/list/properties',
        params: {
          group: keyword
        }
      }).then(res => {
        if (res.data.code === 0) {
          let newlist = res.data.data
          for (var i = 0; i < newlist.length; i++) {
            // this.singleList.key = this.list[i].propKey
            // this.singleList.value = this.list[i].value)
            let singleList = {
              'key': newlist[i].id,
              'value': newlist[i].value
            }
            // this.$set(this.data,”key”,value’) $set()方法，既可以新增属性,又可以触发视图更新
            this.$set(list, i, singleList)
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 职位列表
    getJoblist () {
      this.getList('POSITION', this.jobList)
    },
    // 性别列表
    getSexlist () {
      this.getList('GENDER', this.sexList)
    },
    // 删除代报名
    deleteReplace (id) {
      // this.membersInfo.splice(index, 1)
      this.axios({
        method: 'post',
        url: '/api/journey/deleteJourneyMember',
        params: {
          _method: 'delete',
          journeyMemberId: this.membersInfo[id].id
        }
      }).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取页面信息
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/searchUpdateConferenceData'
      }).then(res => {
        if (res.data.code === 0) {
          this.masterInfo = res.data.data.masterMember
          this.membersInfo = res.data.data.conferenceMembers
          this.defaultValue = this.masterInfo.fkGenderId
          this.companyname = this.masterInfo.companyName
          this.username = this.masterInfo.name
          this.phone = this.masterInfo.phoneNo
          this.defaultValue = this.masterInfo.fkPosition
          this.defaultValue1 = this.masterInfo.fkGenderId
        }
      })
    },
    finishEdit () {
      this.sub()
      if (this.meettingId) {
        this.$router.push({name: 'EnrollSuccess'})
      } else {
        this.$router.push({name: 'Usereport'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/applyRegist.scss";
.img1{
  float: right !important;
  padding-right: 10px;
  padding-top: 5px;
  img{
    width: 38px;
    height: 38px;
  }
  .phone{
    .weui-cells {
      width: 100% !important;
    }
  }
}
</style>

