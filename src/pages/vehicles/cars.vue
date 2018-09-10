<template>
  <div class="cars_container">
     <tab :line-width=2 active-color='#00aac9' v-model="index" custom-bar-width="76px">
        <tab-item class="vux-center" 
                  :selected="demo === item" 
                  v-for="(item, index) in list" 
                  :key="index">
          {{item}}
        </tab-item> 
      </tab>
      <div class="slide">
      <swiper v-model="index"  :show-dots="false" height="800px">
        <swiper-item>
          <div class="tab-swiper vux-center">
            <ul class="ul1 ul3" v-for="(item1, index1) of allList" :key="index1">
              <li  @click="goWhere">
                <img :src="item1.vehiclesPhoto" alt="" >
              </li>
              <li>
                <span>{{item1.vehiclesName}}</span>
                <span class="green" v-if='!item1.isDepart'>未发车</span>
                <span class="red" v-else>已发车</span>
              </li>
              <li>
                <span>车牌号码：{{item1.licensePlateNumber}}</span>
              </li>
              <li>
                <span class="nav">></span>
                <span><i>发车时间：</i> {{item1.departTime}}</span>
                <span><i>发车地点：</i> {{item1.departPlace}}</span>
                <!-- <span>5.6km</span> -->
              </li>
              <li>
                <span @click="enroll(index1)">立即报名</span>
              </li>
            </ul>
          </div>
        </swiper-item>


         <swiper-item>
          <div class="tab-swiper vux-center">
           <ul class="ul1 ul3" v-for="(item1, index1) of applyList" :key="index1">
              <li @click="gosomeWhere">
                <img :src="item1.vehiclesPhoto" alt="" >
              </li>
              <li>
                <span>{{item1.vehiclesName}}</span>
                <span class="green" v-if='!item1.isDepart'>未发车</span>
                <span class="red" v-else>已发车</span>
              </li>
              <li>
                <span>车牌号码：{{item1.licensePlateNumber}}</span>
              </li>
              <li>
                <span><i>发车时间：</i> {{item1.departTime}}</span>
                <span class="nav">></span>
                <span><i>发车地点：</i> {{item1.departPlace}}</span>
                <!-- <span>5.6km</span> -->
              </li>
              <!-- <li  @click="goPassengers(index1)">
                <span>乘客信息</span>
                <img v-for="(photo, index) in item1.members" :key="index" :src="photo.photo" v-if="index === 0">
                <span>{{item1.members.length}}/{{item1.peopleLimit}} </span>
                <img src="../../assets/images/jiantou.png" alt="">
              </li> -->
              <li v-show = false>
                <span>报名状态</span>
                <!-- <span @click="enroll(index1)" v-if='item1.canEdit && !item1.isDepart'>立即报名</span> -->
                <span  class="btn1">立即报名</span>
              </li>
            </ul>
          </div>
        </swiper-item>
      </swiper> 
      </div>
      
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list: ['全部车辆', '已报名车辆'],
      demo: '全部状态',
      index: 0,
      colFlag: true,
      flag: true,
      firstNum: 0,
      firstSum: 6,
      secondNum: 0,
      secondSum: 6,
      allList: [],
      allMembers: [],
      applyList: [],
      applyMembers: []
    }
  },
  mounted () {
    // this.getInfo(false)
    this.getInfo(false)
    this.getInfo(true)
  },
  methods: {
    enroll: function (num) {
      if (this.index === 0) {
        this.$router.push({
          name: 'Driveradd',
          query: {
            vehiclesName: this.allList[num].vehiclesName,
            shiftsId: this.allList[num].id
          }
        })
      } else {
        this.$router.push({
          name: 'Driveradd',
          query: {
            vehiclesName: this.applyList[num].vehiclesName,
            shiftsId: this.applyList[num].id
          }
        })
      }
    },
    gosomeWhere () {
      this.$store.commit('setValue', false)
      this.$router.push({name: 'Vehicledetails'})
    },
    goWhere () {
      this.$store.commit('setValue', true)
      this.$router.push({name: 'Vehicledetails'})
    },
    getInfo (keyword) {
      this.axios({
        method: 'get',
        url: '/api/dispatching/vehicles',
        params: {
          isApply: keyword
        }
      }).then(res => {
        if (res.data.code === 0) {
          if (keyword) {
            this.applyList = res.data.data
            // this.applyMembers = this.applyList.members
          } else {
            this.allList = res.data.data
            // this.allMembers = this.allList.members
          }
          // arr = res.data.data
          // console.log(list1)
          // console.log(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goPassengers (index) {
      if (this.allList[index].members.length) {
        if (this.index === 0) {
          this.$router.push({
            name: 'Drivershift',
            query: {
              shiftsId: this.applyList[index].id
            }
          })
        } else {
          this.$router.push({
            name: 'Drivershift',
            query: {
              shiftsId: this.allList[index].id
            }
          })
        }
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/cars.scss";
  .slide{
    width: 100%;
    position: relative;
    top: 0;
    bottom: 0;
    background: #f2f2f2;
  }
</style>

