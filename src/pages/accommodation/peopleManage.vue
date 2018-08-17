<template>
  <div class="rygl_container">
    <div class="first">
       <span @click="flag=!flag" class="red" v-if="flag">删除</span>
       <span v-if="!flag" @click="flag=!flag" class="blue">完成</span>
       <span @click="$router.push({'name': 'HotelManage'})">{{hotelName}}</span> 
    </div>
    <div class="second">
      <span v-for="(item, index) of room" :key="'room' + index">{{item}}</span>
    </div>
    <ul>
      <li v-for="(item, index) of accomMemberList" :key="'member' + index">
        <group>
          <span>{{index+1}}</span>
          <span><selector :options="roomlist" v-model="accomValue[index]" class="s1"></selector></span>
          <span>
            <span class="red" v-if="!flag" @click="deleteAccom(index)">删除</span>
            <span class="more" v-if="item.members>3">more</span>
            <img
              @click="peopleAdd(index)"
              v-for="(itemmembers, index1) of item.members" :key="'img' + index1"
              v-if="itemmembers.photo !== ''"
              :src="itemmembers.photo"
            >
            <span class="spanlast" v-if="!item.members.length" @click="peopleAdd(index)">添加成员</span>
          </span>
      </group>   
      </li>
    </ul>
  
    <div class="last">
      <p @click="addNewList()">新增房型</p>
      <p @click="keepList()">保存</p>
    </div>
  </div>
</template>


<script>
import { Selector, Group } from 'vux'

export default {
  components: {
    Group,
    Selector
  },
  data () {
    return {
      flag: true,
      roomlist: [],
      defaultValue: [],
      info: {},
      memberList: [],
      roomCount: [],
      order: this.$route.query.index,
      accomValue: this.$store.state.accomValue
    }
  },
  computed: {
    hotelId () {
      return this.$store.state.hotelId
    },
    hotelName () {
      return this.$store.state.hotelName
    },
    nowConferenceId () {
      return this.$store.state.nowConferenceId
    },
    accomMemberList () {
      return this.$store.state.accomMemberList
    },
    accomPic () {
      return this.$store.state.accomPic
    },
    membersId () {
      return this.$store.state.membersId
    },
    // accomValue () {
    //   return this.$store.state.accomValue
    // },
    room () {
      return this.$store.state.room
    }
  },
  created () {
    this.getroomList()
    this.getInfo()
    console.log(this.accomMemberList.length)
    if (this.accomMemberList.length === 0) {
      this.getInfo()
      this.accomValue = this.defaultValue
    }
    // if (this.order !== '') {
    //   for (var i = 0; i < this.accomPic[this.order].length; i++) {
    //     // console.log(this.accomMemberList[this.order].members[i].photo)
    //     console.log(this.accomPic[this.order][i])
    //     this.accomMemberList[this.order].members[i].photo = this.accomPic[this.order][i]
    //   }
    // }
    // this.getInfo()
  },
  methods: {
    // 获取页面信息
    getInfo () {
      this.axios({
        method: 'get',
        url: '/api/accommodation/searchUpdateConferenceData',
        params: {
          hotelId: this.hotelId
        }
      }).then(res => {
        if (res.data.code === 0) {
          console.log('我有做请求0v0')
          this.info = res.data.data
          this.roomCount = this.info.roomCount
          this.$store.commit('room', this.roomCount)
          this.memberList = this.info.memberList
          for (var i = 0; i < this.memberList.length; i++) {
            this.defaultValue.push(this.memberList[i].roomType)
          }
          console.log(this.defaultValue)
          this.$store.commit('accomMemberList', this.memberList)
          this.$store.commit('accomValue', this.defaultValue)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获得下拉列表
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
    // 获取房型列表
    getroomList () {
      this.getList('HOTEL_ROOM_TYPE', this.roomlist)
    },
    // 新增房型
    addNewList () {
      this.accomMemberList.push({members: [], roomType: 9})
      this.$store.commit('accomMemberList', this.accomMemberList)
      this.accomValue = []
      for (var i = 0; i < this.accomMemberList.length; i++) {
        this.accomValue.push(this.accomMemberList[i].roomType)
      }
      this.$store.commit('accomValue', this.accomValue)
    },
    // 删除房型
    deleteAccom (index) {
      // let reserveIds = []
      // this.accomMemberList[index].members.forEach((el, index2) => {
      //   reserveIds.push(el.reserveId)
      // })
      // let params = {
      //   _method: 'delete',
      //   reserveId: reserveIds,
      //   fkRoomTypeId: this.accomMemberList[index].roomType,
      //   hotelId: this.hotelId
      // }
      // console.log(params)
      // this.axios({
      //   method: 'post',
      //   url: '/api/accommodation/deleteReserveById',
      //   params: params
      // }).then(res => {
      //   if (res.data.code === 0) {
      //     console.log(res.data.data)
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
      this.accomMemberList.splice(index, 1)
      // this.$store.commit('accomMemberList', this.accomMemberList)
    },
    // 添加成员
    peopleAdd (index) {
      this.$router.push({
        name: 'AccomAdd',
        query: {
          index: index
        }
      })
    },
    // 保存
    keepList () {
      let arr = []
      if (this.accomMemberList.length) {
        for (var i = 0; i < this.accomMemberList.length; i++) {
          this.accomMemberList[i].members.forEach((el, index) => {
            let obj = {
              fkHotelId: this.hotelId,
              fkRoomTypeId: this.accomMemberList[i].roomType,
              fkMemberId: el.id,
              fkConferenceId: this.nowConferenceId
            }
            arr.push(obj)
          })
        }
      // console.log(arr)
      }
      // 判断不同房间是否有相同的成员
      let ids = []
      arr.forEach((el, index) => {
        ids.push(el.fkMemberId)
      })
      // var narr = arr.sort()
      // for (var a = 0; a < arr.length; i++) {
      //   if (narr[a] === narr[a + 1]) {
      //     console.log('数组重复内容：' + narr[a])
      //   }
      // }
      // console.log(ids)
      let newarr = JSON.stringify(arr)
      // console.log(newarr)
      this.axios({
        method: 'post',
        url: '/api/accommodation/saveAccommodation',
        params: {
          hotelRoomReserveList: newarr,
          memberIds: this.membersId,
          hotelId: this.hotelId,
          isMustUpdate: false
        }
      }).then(res => {
        console.log(res.data.data)
        this.$router.push({name: 'HotelManage'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/peopleManage.scss";
</style>

