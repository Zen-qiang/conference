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
      selectId: []
    }
  },
  created () {
    this.getPeopleInfo()
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
      this.$store.commit('selectConferenceMembersId', selsects)
      this.$router.push({
        name: 'AddJourney',
        query: {
          userPic: this.userPic.slice(0, 2)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addPeople.scss";
</style>

