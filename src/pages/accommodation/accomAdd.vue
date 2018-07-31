<template>
   <div class="tjry_container">
    <div class="content">
      <p class="first">
        <span>成员信息</span>
        <!-- <span @click="$router.push({'name' : 'ReplaceErollOne'})">增加</span> -->
      </p>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) of addInfo"
            :key="index"
            :class="{active: item.isChecked}"
            @click="chooseOrder(item)"
           >
            <img :src="item.photo" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="addAccom()">添加</p>
    </div>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      info: [],
      singleSelect: [],
      singlePic: [],
      order: this.$route.query.index,
      infoCheck: [],
      addInfo: this.$store.state.addInfo,
      membersId: this.$store.state.membersId
    }
  },
  computed: {
    hotelId () {
      return this.$store.state.hotelId
    },
    hotelName () {
      return this.$store.state.hotelName
    },
    accomSelect () {
      return this.$store.state.accomSelect
    },
    accomPic () {
      return this.$store.state.accomPic
    },
    accomMemberList () {
      return this.$store.state.accomMemberList
    }
  },
  created () {
    console.log(this.addInfo)
    if (this.addInfo === null) {
      this.getInfo()
    }
    this.addInfo.forEach((el, index) => {
      this.infoCheck.push(el.isChecked)
    })
    console.log(this.infoCheck)
  },
  methods: {
    // 获区默认信息
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/accommodation/searchHotelMemberInfo',
        params: {
          hotelId: this.hotelId
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.info = res.data.data
          this.addInfo = this.info
          this.addInfo.forEach((el, index) => {
            this.membersId.push(el.id)
            this.infoCheck.push(el.isChecked)
            console.log(this.infoCheck)
          })
          this.$store.commit('addInfo', this.addInfo)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    chooseOrder (item) {
      item.isChecked ? item.isChecked = false : item.isChecked = true
    },
    addAccom () {
      let arr = []
      this.addInfo.forEach((el, index) => {
        if (el.isChecked) {
          arr.push({
            id: el.id,
            name: el.name,
            isChecked: true,
            photo: el.photo,
            reserveId: el.reserveId
          })
        }
        // if (el.isChecked) {
        //   console.log(22222)
        //   // this.singleSelect.push(el.id)
        //   // this.singlePic.push(el.photo)
        //   console.log(this.infoCheck)
        //   if (this.infoCheck[index] === false) {
        //     let singleMember = {
        //       id: this.addInfo[index].id,
        //       name: this.addInfo[index].name,
        //       isChecked: true,
        //       photo: this.addInfo[index].photo,
        //       reserveId: this.addInfo[index].reserveId
        //     }
        //     this.accomMemberList[this.order].members.push(singleMember)
        //   } else {
        //     this.accomMemberList[this.order].members = this.addInfo
        //   }
        // } else {
        //   console.log(11111111)
        //   if (this.infoCheck[index] === true) {
        //     this.accomMemberList[this.order].members.splice(index, 1)
        //     console.log(this.accomMemberList)
        //   }
        // }
        this.accomMemberList[this.order].members = arr
        this.$store.commit('accomMemberList', this.accomMemberList)
      })
      this.$router.push({
        name: 'PeopleManage',
        query: {
          index: this.order
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/addPeople.scss";
  .first{
    span {
      float: left !important;
    }
  }
</style>

