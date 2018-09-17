<template>
    <div class="sqbm_container">
        <div class="first"> 
            <p>{{conferenceName}}</p>
            <span></span>
        </div>
        <ul>
            <li>
                <span class="hui">报名信息</span>
                <span><img src="../../assets/images/jia.png" alt=""></span>
                <span @click="goreplace()">添加代报名</span>
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
                <span class="hui">{{membersInfo.length+replaceList.length}}</span>
            </div>
            <li v-for="(item, index) of membersInfo" :key="'membersInfo' + index" v-if="membersInfo[index] !== ''">
                <div class="close"><img src="../../assets/images/cha.png" alt="" @click="deleteMember(item.id)"></div>
                <div class="box">
                  <span><img :src="item.photo" alt=""></span>
                  <span>{{item.name}}</span>
                  <span>
                    <img v-if="item.fkGenderId === 4" src="../../assets/images/nan.png" alt="">
                    <img v-else src="../../assets/images/nv.png" alt="">
                  </span>
                  <span>代</span>
                  <span><img src="../../assets/images/write.png" alt=""></span> 
                  <div class="text">
                    <p>手机 ：{{item.phoneNo}}</p>
                  </div>
                </div>
            </li>
             <li v-for="(item, index) of replaceList" :key="'replaceList' + index" v-if="replaceList[index] !== ''">
                <div class="close"><img src="../../assets/images/cha.png" alt="" @click="deleteReplace(index)"></div>
                <div class="box">
                  <span><img src="../../assets/images/headpic2.jpg" alt=""></span>
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}
                    <img v-if="item.fkGenderId === 4" src="../../assets/images/nan.png" alt="">
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
        <div class="content">
          <p class="apply" @click="finishEdit()">修改完成</p>
        </div>
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
      fkUserId: this.$store.state.userInfo.id,
      flag: true
    }
  },
  created () {
    this.getInfo()
    this.getSexlist()
    this.getJoblist()
    if (this.meettingId) {
      this.conferenceId = this.meettingId
    }
    // console.log(this.conferenceId)
    // console.log(this.$store.state.replaceList)
  },
  computed: {
    replaceInfo () {
      return this.$store.state.replaceList
    },
    userInfo () {
      return this.$store.state.userInfo.defaultConference.fkUserId
    },
    nowConferenceId () {
      return this.$store.state.nowConferenceId
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
          conferenceId: this.nowConferenceId,
          conferenceMemberViews: JSON.stringify(this.dataList)
        }
      }).then((res) => {
        // console.log(res.data.data)
        // this.$router.push({
        //   name: 'EnrollSuccess',
        //   query: {
        //     meettingId: this.conferenceId
        //   }
        // })
        if (this.meettingId) {
          this.$router.push({
            path: '/meetings'
          })
        } else {
          this.$router.push({name: 'Usereport'})
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    // 获取下拉列表
    getList (keyword, list) {
      let self = this
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
          if (keyword === 'POSITION') {
            // if (this.defaultValue === null || this.defaultValue === 'undefined') {
            this.defaultValue = list[0].key
            // }
          } else if (keyword === 'GENDER') {
            self.defaultValue1 = list[0].key
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
    deleteReplace (index) {
      this.replaceList.splice(index, 1)
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
          this.companyname = this.masterInfo.companyName
          this.username = this.masterInfo.name
          this.phone = this.masterInfo.phoneNo
          // this.defaultValue = this.masterInfo.fkPosition
          this.defaultValue1 = this.masterInfo.fkGenderId
          // console.log(this.defaultValue)
        }
      })
    },
     // 增加代报名
    goreplace () {
      this.$router.push({
        name: 'ReplaceEroll',
        query: {
          meettingId: this.meettingId,
          conferenceName: this.conferenceName,
          flag: this.flag
        }
      })
    },
    // 删除代报名
    deleteMember (id) {
      this.axios({
        method: 'post',
        url: '/api/conference/deleteConferenceMember',
        params: {
          _method: 'delete',
          memberId: id
        }
      }).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    finishEdit () {
      this.sub()
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

