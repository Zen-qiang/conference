<template>
  <div class="xcgl_container">
     <ul class="tabs">
        <li class="li-tab" 
            v-for="(item,index) in tabsParam" @click="toggleTabs(index)"
            :key='index'
           :class="{active:index!=nowIndex,active1:index===nowIndex}">
          {{item}}
        </li>
        <span class="change">
          <span v-show="flag" class="red" @click="flag = !flag">编辑</span>
          <span v-show="!flag" class="blue" @click="flag = !flag">完成</span>
        </span>
        <img src="../../assets/images/jia2.png" alt="" class="pic" @click="$router.push({'name' : 'AddPeople'})">
      </ul>
    <ul class="divTab" v-show="nowIndex===0">
       <li class="box" 
           v-for ="(item, index) of arriveList" 
           :key ="index"
           >
         <div class="content" @click="editInfo(item.id)">
           <div class="left">
             <!-- ../../assets/images/headpic11.png -->
            <img :src="item.photo" alt="">
          </div>
          <div class="center">
            <p>{{item.week}}</p>
            <p></p>
            <img src="../../assets/images/sanjiaoxing.png" alt="">
            <p>{{item.numberOfRuns}}</p>
          </div>
          <div class="right">
            <p>{{item.city}}</p>
            <p>{{item.place}}</p>
            <p>{{item.hour}}</p>
            <p>预计到达 {{item.hour}}</p>
          </div>
       </div>
        <div class="xia" @click="checkothers(item.id, item.membersSize)">
         <span>其他成员 &nbsp;</span>
         <span><i>{{item.membersSize}}</i>人</span>
         <span><img :src="item.members.length?item.members[0].photo:''" alt=""></span>
         <!-- <span v-if="item.members.length">
           <img :src="item.members[0].photo" alt="">
         </span>
         <span v-else>
           <img src="" alt="">
         </span> -->
         <span>more</span>
      </div>
      <img src="../../assets/images/cuo2.png" alt="" class="img1" v-show="!flag" @click="deleteInfo(item.id, index)">
     </li>      
     <x-button @click.native="out">管理我的专车</x-button>
    </ul>
    
    <ul class="divTab divTab2" v-show="nowIndex===1">
      <li class="box" 
          v-if='nextFirstFlag'
          v-for ="(item, index) of departList" 
          :key ="index">
         <div class="content" @click="editInfo(item.id)">
           <div class="left">
            <img :src="item.photo" alt="">
          </div>
          <div class="center">
            <p>{{item.week}}</p>
            <p></p>
            <p></p>
            <p>{{item.numberOfRuns}}</p>
          </div>
          <div class="right">
            <p>{{item.city}}</p>
            <p>{{item.place}}</p>
            <p>{{item.hour}}</p>
            <p>预计到达 {{item.hour}}</p>
          </div>
       </div>
      <div class="xia" @click="checkothers(item.id, item.membersSize)">
        <span>其他成员 &nbsp;</span>
        <span><i>{{item.membersSize}}</i>人</span>
        <span><img :src="item.members.length?item.members[0].photo:''" alt=""></span>
        <span>more</span>
      </div>
      <img src="../../assets/images/cuo2.png" alt="" class="img1" v-show="!flag"  @click="deleteInfo(item.id, index)">
      </li>
      <x-button @click.native="out">管理我的专车</x-button>
    </ul>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data () {
    return {
      tabsParam: ['到站信息', '返程信息'],
      nowIndex: 0,
      flag: 'false',
      firstFlag: 'true',
      secondFlag: 'true',
      nextFirstFlag: 'true',
      arriveList: [],
      departList: [],
      arriveMemberNum: '',
      departMenmberNum: ''
    }
  },
  created () {
    this.getArriveStatus()
    this.getDepartStatus()
  },
  methods: {
    toggleTabs: function (index) {
      this.nowIndex = index
    },
    out: function () {
      this.$router.push({'name': 'Cars'})
    },
    editInfo (id) {
      if (!this.flag) {
        this.$router.push({
          name: 'EditJourney',
          query: {
            journeyId: id,
            nowIndex: this.nowIndex
          }
        })
      }
    },
    getArriveStatus () {
      this.axios({
        method: 'get',
        url: '/api/journey/list',
        params: {
          journeyType: 'ARRIVE'
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.arriveList = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getDepartStatus () {
      this.axios({
        method: 'get',
        url: '/api/journey/list',
        params: {
          journeyType: 'DEPART'
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.departList = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    checkothers (id, num) {
      if (num === 0) {
        return 0
      } else {
        this.$router.push({
          name: 'Checkothers',
          query: {
            journeyId: id
          }
        })
      }
      // console.log(id)
    },
    deleteInfo (id, index) {
      this.axios({
        method: 'post',
        url: '/api/journey/deleteJourney',
        params: {
          _method: 'delete',
          'journeyId': id
        }
      }).then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log(err)
      })
      if (this.nowIndex === 0) {
        this.arriveList.splice(index, 1)
      } else {
        this.departList.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/journeyManage.scss";
</style>

