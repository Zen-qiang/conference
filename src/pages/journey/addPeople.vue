<template>
  <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>成员信息</span>
      </p>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) in  addPeopleMembers"
            :key="index"
            :class="{active: item.isChecked}" 
            @click="chooseOrder(item)"
           >
            <div class="imgBox">
              <div class="shadow"  :class="{disabled: item.isDisabled}"></div>
              <img :src="'' + item.photo + ''" alt="">
            </div>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="addUserpic()">确定</p>
    </div>
  </div>
</template>

<script>
// import * as types from '../../store/mutations'
export default {
  data () {
    return {
      a: true,
      b: false,
      no: null,
      info: [],
      userPic: [],
      currentMember: [],
      addPeopleMembers: {},
      journeyId: this.$route.params.journeyId,
      nowIndex: this.$route.params.nowIndex,
      addPeopleFlag: this.$route.query.addPeopleFlag
      // journeyInfo: null
    }
  },
  created () {
    // this.journeyInfo = this.$store.state.journeyInfo
    // // 1.从vuex获取journeyInfo
    // 2.判断journeyInfo.from，如果存在，获取对应到站/返程同行人员，替换本页面select
    // 3.如果不存在，按默认全选操作
    // this.$bus.on('setMember', this.getMember)
    this.getPeopleInfo()
  },
  // beforeDestroy () {
  //   this.$bus.off('setMember', this.getMember)
  // },
  computed: {
    journeyInfo () {
      return this.$store.state.journeyInfo
    },
    member () {
      return this.$store.state.member
    }
  },
  // beforeDestroy () {
  //   this.$bus.$off('setMember', this.getMember)
  // },
  methods: {
    // getMember (member) {
    //   console.log(member)
    //   this.$nextTick(() => {
    //   })
    //   console.log(this.currentMember)
    // },
    // 初始化函数
    initJounery () {
    // 1.判断所有人员是否已经选中
    // 2.判断当前人员是否在行程中
      // this.journeyInfo.members.forEach(el => {
      //   this.currentMember.push(el)
      // })
      this.currentMember.push(this.member)
      for (let i in this.addPeopleMembers) {
        let el = this.addPeopleMembers[i]
        if (el.isChecked) {
           // 记录状态，避免多次循环出错
          let ifTrue = true
          for (let j of this.currentMember[0]) {
            let cm = j
            if (el.id === cm.id) {
              el.isDisabled = false
              ifTrue = false
            } else {
                // 否则选中的就禁用
              // if (el.isChecked) {
               //  el.isDisabled = true
              // }
            }
          }
          if (ifTrue) {
            el.isDisabled = true
          }
        } else {
          if (el.isChecked) {
            el.isDisabled = true
          } else {
            el.isDisabled = false
          }
        }
      }
    },
    change: function (index) {
      this.no = index
    },
    chooseOrder: function (item) {
      if (item.isDisabled) {
        return
      }
      item.isChecked = !item.isChecked
      if (item.isChecked) {
        // 判断currentMember是否存在，不存在则新增,存在不做操作
        if (!this.currentMember[item.id]) {
          this.currentMember[item.id] = {
            id: item.id,
            photo: item.photo
          }
        }
      } else {
        // 判断currentMember是否存在，存在需要删除，不存在不作操作
        if (this.currentMember[item.id]) {
          delete this.currentMember[item.id]
        }
      }
    },
    // 获得页面信息
    getPeopleInfo () {
      console.log(this.journeyInfo.arrive.arriveTime)
      if (this.nowIndex === 0) {
        this.axios({
          // params是添加到url的请求字符串中，用于get请求。
          // data是添加到请求体（body）中的, 用于post请求。
          method: 'get',
          url: '/api/journey/searchAddJourneyMembersInfo',
          params: {
            appointTime: this.journeyInfo.arrive.arriveTime
          }
        }).then(res => {
          if (res.data.code === 0) {
            let info = res.data.data
            let valueArr = []
            let idArr = []
            // 放每一条数据
            info.forEach((people, i) => {
              idArr.push(people.id)
              let value = {
                id: people.id,
                name: people.name,
                photo: people.photo,
                journeyId: people.journeyId,
                isChecked: people.isAddTrip,
                isDisabled: false
              }
              valueArr.push(value)
              // this.addPeopleMembers['str'] = valueArr
              this.$set(this.addPeopleMembers, '' + idArr[i] + '', valueArr[i])
            })
            // console.log(timeObj)
            this.initJounery()
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.axios({
          method: 'get',
          url: '/api/journey/searchAddJourneyMembersInfo',
          params: {
            appointTime: this.journeyInfo.depart.departTime
          }
        }).then(res => {
          if (res.data.code === 0) {
            let info = res.data.data
            let valueArr = []
            let idArr = []
            // 放每一条数据
            info.forEach((people, i) => {
              idArr.push(people.id)
              let value = {
                id: people.id,
                name: people.name,
                photo: people.photo,
                journeyId: people.journeyId,
                isChecked: people.isAddTrip,
                isDisabled: false
              }
              valueArr.push(value)
              // this.addPeopleMembers['str'] = valueArr
              this.$set(this.addPeopleMembers, '' + idArr[i] + '', valueArr[i])
            })
            // console.log(timeObj)
            this.initJounery()
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    // 添加人员跳转
    addUserpic () {
      let selsects = []
      for (let i in this.addPeopleMembers) {
        if (this.addPeopleMembers[i].isChecked && !(this.addPeopleMembers[i].isDisabled)) {
          let selsect = {
            id: this.addPeopleMembers[i].id,
            name: this.addPeopleMembers[i].name,
            photo: this.addPeopleMembers[i].photo
          }
          selsects.push(selsect)
          // selsects.push(this.addPeopleMembers[i])
        }
      }
      console.log(selsects)
      // console.log(this.journeyInfo)
      if (this.journeyInfo) {
        // console.log(this.journeyInfo.from)
        // 给不同的行程的人添加不同的id
        if (this.nowIndex === 0) {
          this.journeyInfo.arrive.people = selsects
          this.$store.commit('journeyInfo', this.journeyInfo)
        }
        if (this.nowIndex === 1) {
          this.journeyInfo.depart.people = selsects
          this.$store.commit('journeyInfo', this.journeyInfo)
        }
      }
      this.$router.replace({
        name: 'AddJourney',
        params: {
          addPeopleFlag: this.addPeopleFlag,
          nowIndex: this.nowIndex,
          statusFlag: true,
          journeyId: this.journeyId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addPeople.scss";
  .disabled{
    // position: relative;
    z-index: 1111;
    width: .6rem;
    height: .6rem;
    background: rgba(0,0,0,.1);
    // z-index: 1111;
  }
  .shadow {
    position: absolute;
    border-radius: 50%;
  }
</style>

