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
            v-for="(item, index) in allMembers"
            :key="index"
            :class="{active: item.isChecked}"
            @click="chooseOrder(item, index, item.isDisabled)"
           >
           <div class="imgBox">
             <img :src="item.photo" alt="" :class="{disabled:item.isDisabled}">
           </div>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <p class="add" @click="addAccom">添加</p>
    </div>
    <toast v-model="show" type="text">{{$t('message.add')}}</toast>
  </div> 
</template>

<script>
import { Toast } from 'vux'
export default {
  name: 'accomAdd',
  components: {
    Toast
  },
  data () {
    return {
      show: false,
      order: this.$route.params.index,
      maxPeopleNum: this.$route.params.maxPeopleNum,
      // infoCheck: [],
      currentMembers: {}
      // accomValue: []
      // membersId: this.$store.state.membersId
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
    },
    allMembers () {
      return this.$store.state.allMembers
    }
  },
  created () {
    // this.allMembers = this.getInfo()
    // console.log(this.allMembers)
    // this.getInfo()
    if (Object.keys(this.allMembers).length === 0) {
      this.getInfo()
    } else {
      this.initMembers()
    }
  },
  methods: {
    initMembers () {
      // currentMembers 为当前房间的成员
      this.currentMembers = this.accomMemberList[this.order].members
      for (let i in this.allMembers) {
        // 在自己房间就可以使用，无论是否选中都是可用
        let el = this.allMembers[i]
        if (el.isChecked) {
          // 记录状态，避免多次循环出错
          let ifTrue = true
          for (let j in this.currentMembers) {
            let cm = this.currentMembers[j]
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
          let info = res.data.data
          let valueArr = []
          let idArr = []
          // 放每一条数据
          info.forEach((people, i) => {
            idArr.push(people.memberId)
            let value = {
              id: people.memberId,
              name: people.name,
              photo: people.photo,
              isChecked: people.isChecked,
              isDisabled: false
            }
            valueArr.push(value)
            this.$set(this.allMembers, '' + idArr[i] + '', valueArr[i])
          })
          this.$store.commit('allMembers', this.allMembers)
          this.initMembers()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 点击选人员事件
    chooseOrder (item, index, isDisabled) {
      if (isDisabled) {
        return
      }
      if (!item.isChecked && Object.keys(this.currentMembers).length === this.maxPeopleNum) {
        this.show = true
        return
      }
      // 从数组中找出当前房间可以存放最大人员数
      // 如果超过就不让点击，并且提示
      item.isChecked = !item.isChecked
      if (item.isChecked) {
        // 判断currentMembers是否存在，不存在则新增,存在不做操作
        if (!this.currentMembers[item.id]) {
          this.currentMembers[item.id] = {
            id: item.id,
            name: item.name,
            photo: item.photo
          }
        }
      } else {
        // 判断currentMembers是否存在，存在需要删除，不存在不作操作
        if (this.currentMembers[item.id]) {
          delete this.currentMembers[item.id]
        }
      }
      // this.roomArrs.forEach((el, i) => {
      //   // 判断是否是一个房型
      //   if (this.room === el.id) {
      //     let max = el.peopleMax
      //     console.log(max)
      //     // 找到当前房型所有checked，进行判断
      //     if (max < Object.keys(this.currentMembers).length) {
      //       return
      //     }
      //   }
      // })
    },
    // 点击添加事件
    addAccom () {
      // 将currentMembers数据放到accomMemberList指定房间中
      // allMembers同步全局选中状态
      // 同步VUEX数据
      this.accomMemberList[this.order].members = this.currentMembers
      this.$store.commit('accomMemberList', this.accomMemberList)
      this.$store.commit('allMembers', this.allMembers)
      this.$router.replace({name: 'PeopleManage'})
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
  .disabled{
    // position: relative;
    width: .6rem;
    height: .6rem;
    background: rgba(0,0,0,.1);
    // z-index: 1111;
  }
</style>

