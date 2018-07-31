<template>
  <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>成员信息</span>
        <span @click="$router.push({'name' : 'ReplaceErollOne'})">增加</span>
      </p>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) of info.members"
            :key="index"
            :class="{active: item.show}"
            @click="chooseOrder($event, item.conferenceMembersId, item)"
           >
            <img :src="item.userPicture" alt="">
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
      selectId: [],
      nowIndex: this.$route.query.nowIndex,
      journeyId: this.$route.query.journeyId,
      statusFlag: true,
      addPeopleFlag: this.$route.query.addPeopleFlag
      // journeyInfo: null
    }
  },
  created () {
    // this.journeyInfo = this.$store.state.journeyInfo
    // // 1.从vuex获取journeyInfo
    // 2.判断journeyInfo.from，如果存在，获取对应到站/返程同行人员，替换本页面select
    // 3.如果不存在，按默认全选操作
    this.getPeopleInfo()
  },
  computed: {
    journeyInfo () {
      return this.$store.state.journeyInfo
    }
  },
  methods: {
    change: function (index) {
      this.no = index
    },
    chooseOrder: function (e, id, item) {
      item.show ? this.$set(item, 'show', false) : this.$set(item, 'show', true)
      // console.dir(e.target.parentNode)
      // if (e.target.tagName === 'LI') {
      //   if (e.target.className.indexOf('active') === -1) {
      //     e.target.classList.add('active')
      //     e.target.classList.remove('normal')
      //   } else {
      //     e.target.classList.remove('active')
      //     e.target.classList.add('normal')
      //   }
      // } else {
      //   if (e.target.parentNode.className.indexOf('active') === -1) {
      //     e.target.parentNode.classList.add('active')
      //     e.target.parentNode.classList.remove('normal')
      //   } else {
      //     e.target.parentNode.classList.remove('active')
      //     e.target.parentNode.classList.add('normal')
      //   }
      // }
    },
    getPeopleInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/searchApplySuccessMemberInfo'
      }).then(res => {
        if (res.data.code === 0) {
          this.info = res.data.data
          this.info.members.forEach(element => {
            this.$set(element, 'show', true)
          })
          let members = this.info.members
          for (var i = 0; i < members.length; i++) {
            this.userPic.push(members[i].userPicture)
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    addUserpic () {
      let selsects = []
      this.info.members.forEach((el, index) => {
        if (el.show) {
          selsects.push(el.conferenceMembersId)
        }
      })
      console.log(selsects)
      // console.log(this.journeyInfo)
      if (this.journeyInfo) {
        // console.log(this.journeyInfo.from)
        if (this.journeyInfo.from === 'Arrive') {
          this.journeyInfo.arrive.people = selsects
          this.$store.commit('journeyInfo', this.journeyInfo)
        } else {
          this.journeyInfo.depart.people = selsects
          this.$store.commit('journeyInfo', this.journeyInfo)
        }
      } else {
        this.$store.commit('selectConferenceMembersId', selsects)
      }
      if (this.nowIndex === 0 || this.nowIndex === 1) {
        this.$router.push({
          name: 'EditJourney',
          query: {
            nowIndex: this.nowIndex,
            journeyId: this.journeyId,
            statusFlag: this.statusFlag
          }
        })
      } else {
        this.$router.push({
          name: 'AddJourney',
          query: {
            userPic: this.userPic.slice(0, 2),
            addPeopleFlag: this.addPeopleFlag
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addPeople.scss";
</style>

