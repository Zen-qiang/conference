<template>
  <div class="rygl_container">
    <div class="first">
       <span @click="flag=!flag" class="blue" v-if="flag">取消</span>
       <span v-if="!flag" @click="flag=!flag" class="red">删除</span>
       <span @click="$router.push({'name': 'HotelManage'})">{{hotelName}}</span> 
    </div>
    <div class="second">
      <span v-for="(item, index) of this.roomArrs" :key="'room' + index">{{item.value}}:{{item.roomNum}}</span>
    </div>
    <ul>
      <li v-for="(item, index) of accomMemberList" :key="'member' + index">
        <group>
          <span>{{index+1}}</span>
          <span><selector :options="roomlist" @on-change="change" v-model="accomValue[index]" class="s1"></selector></span>
          <span>
            <span class="red" v-if="flag" @click="deleteAccom(index)">删除</span>
            <span class="more" v-if="item.members>3">more</span>
            <img
              @click="peopleAdd(index)"
              v-for="(itemmembers, index1) in item.members" :key="'img' + index1"
              v-if="itemmembers.photo !== ''"
              :src="itemmembers.photo"
            >
            <span class="spanlast" v-if="!Object.keys(item.members).length" @click="peopleAdd(index)">编辑</span>
          </span>
      </group>   
      </li>
    </ul>
  
    <div class="last">
      <p @click="addNewList()">新增房型</p>
      <p @click="keepList" :class="{active:isActive}">保存</p>
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
      flag: false,
      roomlist: [],
      defaultValue: [],
      memberList: [],
      roomCount: [],
      isActive: false,
      info: {},
      roomTypeObj: {},
      maxPeopleNum: 0,
      room: null,
      order: this.$route.query.index
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
    accomPic () {
      return this.$store.state.accomPic
    },
    accomValue () {
      return this.$store.state.accomValue
    },
    membersId () {
      return this.$store.state.membersId
    },
    roomArrs: {
      get () {
        return this.$store.state.roomArrs
      },
      set (newValue) {
        this.$store.state.roomArrs = newValue
      }
    },
    accomMemberList: {
      get () {
        return this.$store.state.accomMemberList
      },
      set (newValue) {
        this.$store.state.accomMemberList = newValue
      }
    },
    // accomValue () {
    //   return this.$store.state.accomValue
    // },
    test () {
      return this.$store.state.test
    }
  },
  created () {
    // console.log(this.accomMemberList)
    // this.getroomList()
    if (this.accomMemberList.length === 0) {
      this.getInfo()
    } else {
      this.roomlist = this.roomArrs
      this.roomTypeObj = this.test
    }
  },
  methods: {
    // 获取页面信息
    getInfo () {
      this.axios({
        method: 'get',
        // 获取所有房型
        url: '/api/accommodation/searchUpdateConferenceData',
        params: {
          hotelId: this.hotelId
        }
      }).then(res => {
        if (res.data.code === 0) {
          let arr = []
          let room = null
          var roomArr = []
          let valueArr = []
          // 所有房型
          this.roomCount = res.data.data.roomCount
          this.info = res.data.data
          // 获取数据库中已经选中的值
          // 初始化下拉列表
          this.roomCount.forEach((roomsDetail, i) => {
            // 每次新建一个对象，修改不同对象的值
            let roomObj = {}
            roomObj['id'] = roomsDetail.fkTypeId
            roomObj['key'] = roomsDetail.fkTypeId
            roomObj['value'] = roomsDetail.value_default
            roomObj['roomNum'] = roomsDetail.roomNum
            roomObj['peopleMax'] = roomsDetail.maxPeopleNum
            roomArr.push(roomObj)
            this.roomTypeObj[roomsDetail.fkTypeId] = roomObj
            this.$set(this.roomlist, i, roomArr[i])
          })
          // console.log(this.roomTypeObj)
          this.roomlist = roomArr
          this.$store.commit('test', this.roomTypeObj)
          this.$store.commit('roomArrs', roomArr)
          if (!this.info.memberList.length) {
            this.accomMemberList = []
          } else {
          // 存放每一个对象
            let memberObj = {}
            for (var i = 0, len = this.info.memberList.length; i < len; i++) {
              // console.log(this.info.memberList[i])
              room = this.info.memberList[i].roomType
              for (let j = 0, n = this.info.memberList[i].members.length; j < n; j++) {
                // this.info.memberList[i].members[j].isChecked = true
                // console.log(this.info.memberList[i].members)
                arr.push(this.info.memberList[i].members[j].memberId)
                let value = {
                  id: this.info.memberList[i].members[j].memberId,
                  name: this.info.memberList[i].members[j].name,
                  photo: this.info.memberList[i].members[j].photo
                }
                valueArr.push(value)
                memberObj['' + arr[j] + ''] = valueArr[j]
              }
            }
            // 最外面的对象
            var json = {}
            json['members'] = memberObj
            json['roomType'] = room
            this.accomMemberList.push(json)
            for (let i = 0; i < this.accomMemberList.length; i++) {
              this.accomValue.push(this.accomMemberList[i].roomType)
            }
            this.$store.commit('accomValue', this.accomValue)
          }
          // console.log(this.accomMemberList)
          // this.$store.commit('accomMemberList', this.accomMemberList)
          // console.log(this.accomMemberList)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    change (val) {
      // 当前房间的id
      this.room = val
      this.maxPeopleNum = this.roomTypeObj[val].peopleMax
    },
    // 获得下拉列表
    getList (keyword, list) {
      // let self = this
      // if (list.length) return
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
            // console.log(singleList)
            // this.$set(this.data,”key”,value’) $set()方法，既可以新增属性,又可以触发视图更新
            this.$set(list, i, singleList)
          }
          // 下拉数据保存到VUEX中，重新进入页面清空重新获取
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
      console.log(this.accomMemberList)
      this.accomMemberList.push({members: {}, roomType: 9})
      this.$store.commit('accomValue', [])
      this.$store.commit('accomMemberList', this.accomMemberList)
      for (let i = 0; i < this.accomMemberList.length; i++) {
        this.accomValue.push(this.accomMemberList[i].roomType)
      }
      this.$store.commit('accomValue', this.accomValue)
      // console.log(this.accomValue)
    },
    // 删除房型
    deleteAccom (index) {
      this.accomMemberList.splice(index, 1)
    },
    // 添加成员
    peopleAdd (index) {
      this.$router.push({
        name: 'AccomAdd',
        params: {
          index: index,
          maxPeopleNum: this.maxPeopleNum
        }
      })
    },
    // 保存
    keepList () {
      this.isActive = true
      let arr = []
      if (this.accomMemberList.length) {
        for (var i = 0; i < this.accomMemberList.length; i++) {
          for (let j in this.accomMemberList[i].members) {
            let el = this.accomMemberList[i].members[j]
            this.membersId.push(this.accomMemberList[i].members[j].id)
            let obj = {
              fkHotelId: this.hotelId,
              fkRoomTypeId: this.room,
              fkMemberId: el.id,
              fkConferenceId: this.nowConferenceId
            }
            arr.push(obj)
          }
        }
      }
      let string = JSON.stringify(arr)
      this.axios({
        method: 'post',
        url: '/api/accommodation/saveAccommodation',
        params: {
          hotelRoomReserveList: string,
          memberIds: this.membersId,
          hotelId: this.hotelId,
          isMustUpdate: true
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

<style lang="scss" scoped>
 .active{
  color: #fff!important;
  background: #0cb4ce;
}
@import "../../assets/css/peopleManage.scss"
</style>

