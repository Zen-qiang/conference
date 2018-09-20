<template>
  <div class="dbm_container">
    <!-- <div class="add">
       <img src="../../assets/images/jia.png" alt="">
       <p>代报名</p>
   </div> -->
   <ul>
       <li>
          <span>姓名</span>
          <span><input type="text" required placeholder="请输入姓名" v-model="userName"></span>
       </li>
        <li>
          <span>照片</span>
          <span class="hui"></span>
          <a href="javascript:;" class="upload">将用于证件打印
            <input type="file" multiple="multiple" accept="image/*" capture="camera" class="change">
          </a>           
          <span><img src="../../assets/images/camera.png" alt=""></span>           
        </li>
        <li class="hui">
          <group>
            <x-input title="手机" required  ref="mobile" name="mobile" placeholder="请输入手机号码"  v-model="mobile" :max="11" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right" :show-clear="false" keyborad="number"></x-input>
          </group>
        </li>
        <li>
          <group>
            <selector title="性别" :options="sexList" v-model="defaultValue"></selector>
          </group>
        </li>
   </ul>
   <p class="end" @click="addReplace">完成</p>
   <toast v-model="show" type="text" position="middle">{{$t('message.check')}}</toast>
  </div>
   
</template>

<script>
import { Group, Selector, XInput, Toast } from 'vux'
export default {
  components: {
    Group,
    Selector,
    XInput,
    Toast
  },
  created () {
    this.getSexlist()
  },
  data () {
    return {
      defaultValue: '',
      sexList: [],
      userName: '',
      mobile: '',
      show: false,
      meetting: this.$route.query.meetting,
      conferenceId: this.$route.query.meettingId,
      fkUserId: this.$store.state.userInfo.id,
      conference: this.$route.query.conference,
      conferenceName: this.$route.query.conferenceName,
      meettingId: this.$route.query.meettingId,
      flag: this.$route.query.flag
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    addReplace () {
      // let arr = []
      let arrobj = {
        name: this.userName,
        phoneNo: this.mobile,
        fkGenderId: this.defaultValue,
        fkMasterId: this.fkUserId, // 当前登陆人ID
        master: false
      }
      // arr.push(arrobj)
      if (this.userName && this.$refs.mobile.valid) {
        this.$store.commit('replacePeople', arrobj)
        if (this.userInfo.number > 0) {
          this.$router.replace({
            name: 'EditRegist',
            query: {
              conferenceName: this.conferenceName,
              meettingId: this.meettingId
            }
          })
        } else {
          this.$router.replace({
            name: 'ApplyRegist',
            query: {
              conferenceName: this.conferenceName,
              meettingId: this.meettingId
            }
          })
        }
      } else {
        this.show = true
      }
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
          // if (keyword === 'POSITION') {
          //   self.defaultValue = list[0].key
          // } else if (keyword === 'GENDER') {
          //   self.defaultValue1 = list[0].key
          // }
          self.defaultValue = list[0].key
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 性别列表
    getSexlist () {
      this.getList('GENDER', this.sexList)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/replaceEroll.scss";
</style>


