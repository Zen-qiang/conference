<template>
    <div class="sqbm_container">
        <!-- 1.详细信息跳转 -->
        <div class="first"> 
            <p>{{this.meetting}}</p>
            <span></span>
        </div>

        <ul>
            <li>
                <span class="hui">报名信息</span>
                <span><img src="../../assets/images/jia.png" alt=""></span>
                <!-- 2.代报名跳转 -->
                <span @click="goreplace()">添加代报名</span>
            </li>
            <li>
              <group>
                <x-input title="经销商" name="companyname" placeholder="请输入公司名称" is-type="china" placeholder-align="right" text-align="right" :show-clear="false" v-model="companyname"></x-input>
              </group>
            </li>
            <li>
                <!-- <span>姓名</span>
                <span><input type="text" placeholder="请输入姓名"></span> -->
                <group>
                <x-input title="姓名"  placeholder="请输入姓名" :max="5" is-type="china-name" placeholder-align="right" text-align="right" :show-clear="false"  v-model="username"></x-input>
              </group>
            </li>
            <li>
                <group>
                     <selector title="岗位" :options="jobList" v-model="defaultValue"></selector>
                </group>
            </li>
            <li>
                <span>照片</span>
                <!-- <span class="hui">将用于证件打印</span> -->

                <a href="javascript:;" class="upload">将用于证件打印
                  <input type="file" multiple="multiple" accept="image/*" capture="camera" class="change">
               </a>s
                <!-- <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->

                <!-- <span class="cam" v-if="!imageUrl"><img src="../../assets/images/camera.png" alt=""></span> -->
            </li>
            <li>
                <!-- <span>手机</span>
                <span class="hui"><input type="text" placeholder="请输入手机号码"></span> -->
              <group>
                <x-input title="手机"  name="mobile" placeholder="请输入手机号码" :max="11" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right" :show-clear="false"  v-model="phone"></x-input>
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
                <span class="hui">{{replaceList.length}}</span>
            </div>
            <li v-for="(item, index) of replaceList" :key="index" v-if="replaceList[index] !== ''">
                <div class="close"><img src="../../assets/images/cha.png" alt="" @click="deleteReplace(index)"></div>
                <div class="box">
                  <span><img src="../../assets/images/headpic2.jpg" alt=""></span>
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}
                    <img v-if="item.sex === '男'" src="../../assets/images/nan.png" alt="">
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
         <!-- 4.报名成功跳转 -->
        <p class="apply" @click="sub">提交报名</p>
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
      a: 0,
      defaultValue: '',
      sexList: [],
      defaultValue1: '',
      jobList: [],
      companyname: '',
      username: '',
      phone: '',
      card: '',
      conferenceId: this.$route.query.meettingId,
      list: '',
      singleList: {},
      keyword: '',
      meetting: this.$route.query.meetting,
      dataList: []
    }
  },
  created () {
    this.getSexlist()
    this.getJoblist()
    // console.log(this.conferenceId)
    this.companyname = this.userInfo.company.name
    if (this.registList.length > 0) {
      this.defaultValue1 = this.registList.fkGenderId
      this.username = this.registList.name
      this.defaultValue = this.registList.fkPosition
      this.phone = this.registList.phoneNo
    }
  },
  computed: {
    replaceInfo () {
      return this.$store.state.replaceList.fkUserId
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    replaceList () {
      return this.$store.state.replaceList
    },
    registList () {
      return this.$store.state.registList
    }
  },
  methods: {
    // 提交报名列表
    sub () {
      // console.log(this.username)
      this.dataList.push({
        'fkGenderId': this.defaultValue1,
        'fkUserId': this.userInfo.id,
        'master': true,
        'name': this.username,
        'phoneNo': this.phone,
        'fkPosition': this.defaultValue
      })
      this.$store.commit('registList', this.dataList)
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
        // console.log(res.data.data)
        if (res.data.code === 0) {
          this.$router.push({
            name: 'meetings',
            query: {
              meettingId: this.conferenceId
            }
          })
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
            self.defaultValue = list[0].key
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
    // 增加代报名
    goreplace () {
      this.$router.push({
        name: 'ReplaceEroll',
        query: {
          meetting: this.meetting,
          meettingId: this.conferenceId
        }
      })
    }
    // handleAvatarSuccess (res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw)
    // },
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 2
    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/applyRegist.scss";
</style>

