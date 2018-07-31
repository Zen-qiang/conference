<template>
  <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>车辆成员</span>
        <span style="color:#333">{{vehiclesName}}</span>
      </p>
      <div class="main">
        <ul>
          <li :class="{active: item.isChecked}" 
              v-if="info.length" 
              v-for="(item, index) of info" 
              :key="index" 
              @click="chooseOrder($event, item.id, item)">
            <img :src="item.photo" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="addCarsPeople()">添加至车辆</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: true,
      b: false,
      no: null,
      vehiclesName: this.$route.query.vehiclesName,
      info: [],
      shiftsId: this.$route.query.shiftsId
    }
  },
  created () {
    // console.log(this.vehiclesName)
    this.getPeopleInfo()
  },
  methods: {
    change: function (index) {
      // this.a = !this.a
      // this.b = !this.b
      this.no = index
    },
    // li点击样式改变
    chooseOrder: function (e, id, item) {
      // item.show ? this.$set(item, 'show', false) : this.$set(item, 'show', true)
      item.isChecked ? item.isChecked = false : item.isChecked = true
    },
    // 默认信息
    getPeopleInfo () {
      this.axios({
        method: 'get',
        url: '/api/journey/searchAddJourneyMembersInfo'
      }).then(res => {
        if (res.data.code === 0) {
          this.info = res.data.data
          // this.info.forEach(element => {
          //   this.$set(element, 'show', true)
          // })
          // let members = this.info.members
          // for (var i = 0; i < members.length; i++) {
          //   this.userPic.push(members[i].userPicture)
          // }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 添加至车辆
    addCarsPeople () {
      let rideSelsect = []
      this.info.forEach((el, index) => {
        if (el.isChecked) {
          rideSelsect.push(el.id)
        }
      })
      console.log(rideSelsect)
      this.axios({
        method: 'post',
        url: '/api/dispatching/addVehiclesMembers',
        data: {
          shiftsId: this.shiftsId,
          'membersId[]': rideSelsect
        },
        params: {
          _method: 'put'
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.$router.push({name: 'Cars'})
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addPeople.scss";
</style>

