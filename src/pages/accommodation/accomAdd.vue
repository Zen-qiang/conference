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
            v-for="(item, index) of allMembers"
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
  </div> 
</template>

<script>
export default {
  name: 'accomAdd',
  data () {
    return {
      // info: [],
      isDisabled: false,
      // addInfo: null,
      singleSelect: [],
      singlePic: [],
      order: this.$route.query.index,
      // infoCheck: [],
      currentMembers: [],
      accomValue: []
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
    allMembers: {
      get () {
        return this.$store.state.allMembers
      },
      set (newValue) {
        this.$store.state.allMembers = newValue
      }
    }
  },
  created () {
    // console.log(this.addInfo)
    // this.allMembers = this.getInfo()
    // console.log(this.allMembers)
    this.getInfo()
    // if (this.allMembers.length === 0) {
    //   this.getInfo()
    // } else {
    //   this.initMembers()
    // }
    /* this.currentMembers = this.accomMemberList[this.order].members */
    /* this.accomMemberList.forEach((el, accIndex) => {
      // 1.判断有没有人员
      // 2.如果有人员就添加
      // 3.如果没有人员就不添加
      if (el.members) {
        for (let ele of el.members) {
          this.currentMembers.push(ele)
        }
      }
    }) */
    /* this.allMembers.forEach((el, i) => {
      this.currentMembers.forEach((cm, j) => {
        if (el.id === cm.id) {
          el.isDisabled = false
        } else {
          if (el.isChecked) {
            el.isDisabled = true
          }
        }
      })
    }) */
    /* for (let i = 0, l = this.currentMembers.length; i < l; i++) {
      if (this.currentMembers[i].isChecked) {
        this.currentMembers[i].isDisabled = true
      }
    } */
    // 当前房选中成员
    // var currentMembers = this.$store.state.accomMemberList[0].members
    // // 所有成员
    // for (var i in allMembers) {
    //   if (allMembers[i].isChecked) {
    //     for (var j in currentMembers) {
    //       if (allMembers[i] == currentMembers[j]) {
    //         // 可选
    //         allMembers[i].disabled = false
    //       } else {
    //         // 禁用
    //         allMembers[i].disabled = true
    //       }
    //     }
    //   } else {
    //     // 可选未勾选
    //     allMembers[i].disabled = false
    //   }
    // }
  },
  methods: {
    initMembers () {
      // currentMembers 为当前房间的成员
      this.currentMembers = this.accomMemberList[this.order].members
      for (let i in this.allMembers) {
        // 在自己房间就可以使用，无论是否选中都是可用
        let el = this.allMembers[i]
        if (this.currentMembers) {
          for (let j in this.currentMembers) {
            let cm = this.currentMembers[j]
            if (el.id === cm.id) {
              el.isDisabled = false
            } else {
                // 否则选中的就禁用
              if (el.isChecked) {
                el.isDisabled = true
              }
            }
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
          // 放每一条数据
          info.forEach((people, i) => {
            this.allMembers[String(people.memberId)] = {
              id: people.memberId,
              name: people.name,
              photo: people.photo,
              isChecked: people.isChecked,
              isDisabled: false
            }
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
      // 判断当前人员是否已经分配房间
      /* let isRoom = false
      // for (let i = 0, l = this.currentMembers.length - 1;)
      // console.log(this.currentMembers)
      this.allMembers.forEach((el, currentIndex) => {
        if (item.id === el.id && el.room !== this.$route.query.index) {
          isRoom = true
          item.isDisabled = true
        }
      })
      if (!isRoom) {
        item.isDisabled = false
        item.isChecked ? item.isChecked = false : item.isChecked = true
      } */
      item.isChecked = !item.isChecked
      // 添加或删除当前房间人员，currentMembers
      // 首先判断当前人是否已选中，选中状态下如何禁用，就移除，否则就添加
      console.log(this.currentMembers)
      console.log(item)
      if (item.isChecked) {
        for (let j of this.currentMembers) {
          if (item.isDisabled) {
            delete this.currentMembers[j]
            console.log(this.currentMembers)
          } else {
            this.currentMembers['' + item.id + ''] = this.currentMembers[j]
            console.log(this.currentMembers)
          }
        }
      }
    },
    // 点击添加事件
    addAccom () {
      // 定义变量
      // 获取已经有房间的数组对象(把数组对象传进来)
      // 这个就是存放房间的那个数组,现在差两步，第一步获取到这个数组，第二部给这个数组赋值
      console.log(this.$route.query.index)
      let roomParam = this.$route.query.index
      let arr = []
      for (let ele of this.allMembers) {
        var ifTrue = true
        if (ele.isChecked) {
          for (let el of this.currentMembers) {
            // 当前人已经有房间并且不是自己房间的人，这个人锁死
            if (el.id === ele.id && el.room !== this.$route.query.index) {
              ifTrue = false
              ele.isDisabled = true
            }
          }
          // 如果没有房间
          if (ifTrue) {
            // 浅拷贝
            let obj = {}
            for (let keys in ele) {
              obj[keys] = ele[keys]
            }
            obj.room = roomParam
            obj.isDisabled = false
            this.currentMembers.push(obj)
            arr.push(obj)
            console.log(arr)
          }
        }
      }
      // console.log(this.accomMemberList)
      this.accomMemberList[this.order].members = arr

      // 将currentMembers数据放到accomMemberList指定房间中
      // allMembers同步全局选中状态
      // 同步VUEX数据

      this.$store.commit('accomMemberList', this.accomMemberList)
      this.$store.commit('allMembers', this.allMembers)
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
  .disabled{
    // position: relative;
    width: .6rem;
    height: .6rem;
    background: rgba(0,0,0,.1);
    // z-index: 1111;
  }
</style>

