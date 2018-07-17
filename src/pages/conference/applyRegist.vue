<template>
    <div class="sqbm_container">
        <!-- 1.详细信息跳转 -->
        <div class="first" @click="$router.push({'name': 'Details'})"> 
            <p>adidas春季魅&黑系列上海订货会</p>
            <span></span>
        </div>

        <ul>
            <li>
                <span class="hui">报名信息</span>
                <span><img src="../../assets/images/jia.png" alt=""></span>
                <!-- 2.代报名跳转 -->
                <span @click="$router.push({'name': 'ReplaceEroll'})">添加代报名</span>
            </li>
            <li>
                <!-- <span>经销商</span>
                <span><input type="text" placeholder="请输入公司名称"></span> -->
              <group>
                <x-input title="经销商" name="companyname" placeholder="请输入公司名称" is-type="china" placeholder-align="right" text-align="right" :show-clear="false" v-model="companyname"></x-input>
              </group>
            </li>
            <li>
                <!-- <span>姓名</span>
                <span><input type="text" placeholder="请输入姓名"></span> -->
                <group>
                <x-input title="姓名" name="username" placeholder="请输入姓名" :max="5" is-type="china-name" placeholder-align="right" text-align="right" :show-clear="false"  v-model="username"></x-input>
              </group>
            </li>
            <li>
                <group>
                     <selector title="岗位" :options="jobList" v-model="defaultValue1"></selector>
                </group>
            </li>
            <li>
                <span>照片</span>
                <!-- <span class="hui">将用于证件打印</span> -->

                <a href="javascript:;" class="upload">将用于证件打印
                  <input type="file" multiple="multiple" accept="image/*" capture="camera" class="change">
               </a>

                <span><img src="../../assets/images/camera.png" alt=""></span>
            </li>
            <li>
                <!-- <span>手机</span>
                <span class="hui"><input type="text" placeholder="请输入手机号码"></span> -->
              <group>
                <x-input title="手机"  name="mobile" placeholder="请输入手机号码" :max="11" keyboard="number" is-type="china-mobile" placeholder-align="right" text-align="right" :show-clear="false"  v-model="phone"></x-input>
              </group> 
            </li>
            <li>
                <!-- <span>身份证</span>
                <span><input type="text" placeholder="请输入身份证号码"></span> -->
                <group>
                <x-input title="身份证"  name="card" placeholder="请输入身份证号码" :max="18"  ref="input2"   placeholder-align="right" text-align="right"  v-model="card"></x-input>
              </group> 
            </li>
            <li class="cel2">
                <!-- <span>性别</span>
                <span>男 <img src="../assets/images/nan.png" alt=""></span>
                <span><img src="../assets/images/jiantou.png" alt=""></span> -->
                <group>
                    <selector title="性别" :options="sexList" v-model="defaultValue"></selector>
                </group>
            </li>
        </ul>
        <!-- 1.酒店信息跳转 -->
        <!-- <ul @click="$router.push({'name': 'HotelManage'})">
            <li>
                <span class="hui">酒店信息</span>
                <span>选择</span>
                <span><img src="../../assets/images/jiantou.png" alt=""></span>
            </li>
            <li>
                <span>酒店名</span>
                <span>上海四季酒店陆家嘴店</span>
            </li>
            <li>
                <span>房间类型</span>
                <span>商务标间</span>
            </li>
            <li>
                <span>房间序号</span>
                <span>310</span>
            </li>
        </ul> -->

        <ul class="dbm">
            <li>
                <span class="hui">代报名成员</span>
                <span class="hui">{{a}}</span>
            </li>
            <li v-if='false'>
                <div class="close"><img src="../../assets/images/cha.png" alt=""></div>
                <div class="box">
                  <span><img src="../../assets/images/headpic2.jpg" alt=""></span>
                  <span>柳清风</span>
                  <span>男 <img src="../../assets/images/nan.png" alt=""></span>
                  <span>代</span>
                  <span><img src="../../assets/images/write.png" alt=""></span> 

                  <div class="text">
                    <p>手机 ：15026818561</p>
                    <P>身份证 ：310115188119247615</P>
                    <p>酒店 ：上海四级酒店</p>
                    <P>房间类型 ：商务标房</P>
                    <p>房间序号 ： 314</p> 
                  </div>
                </div>
            </li>
            <li v-if='false'>
                <div class="close"><img src="../../assets/images/cha.png" alt=""></div>
                <div class="box">
                  <span><img src="../../assets/images/headpic3.jpg" alt=""></span>
                  <span>陶丹凤</span>
                  <span>女 <img src="../../assets/images/nv.png" alt=""></span>
                  <span>代</span>
                  <span><img src="../../assets/images/write.png" alt=""></span> 
                  
                  <div class="text">
                     <p>手机 ：15026818561</p>
                     <P>身份证 ：31011518726122715</P>
                     <p>酒店 ：上海四级酒店</p>
                     <P>房间类型 ：商务标房</P>
                     <p>房间序号 ： 315</p> 
                  </div>
                    
                </div>
            </li>
        </ul>
         <!-- 4.报名成功跳转 -->
        <p class="apply" @click="sub">提交报名</p>
    </div>
</template>

<script>
import { Group, Selector, XInput } from 'vux'
export default {
  components: {
    Group,
    Selector,
    XInput
  },
  data () {
    return {
      a: 0,
      defaultValue: 'nan',
      sexList: [{key: 'nan', value: '男'}, {key: 'nv', value: '女'}],
      defaultValue1: 'jl',
      jobList: [{key: 'jl', value: '经理'}, {key: 'zj', value: '总监'}],
      companyname: '',
      username: '',
      phone: '',
      card: ''
    }
  },
  methods: {
    sub () {
      this.axios({
        method: 'post',
        url: '/api/conference/enter',
        data: {
          conferenceId: 2,
          conferenceMemberViews: [
            {
              endTime: '2018-04-27T04:35:56.016Z',
              fkGenderId: 0,
              fkMasterId: 0,
              fkRoomTypeId: 0,
              fkUserId: 0,
              idNumber: 'string',
              master: true,
              name: 'Jenny',
              phoneNo: 'string',
              photo: 'string',
              roomSeq: 0,
              startTime: '2018-04-27T04:35:56.016Z',
              valid: true
            }
          ]
        }
        // transformRequest: [function (data) {
        //   let ret = ''
        //   for (let it in data) {
        //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //   }
        //   return ret
        // }]
      }).then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      this.$router.push({'name': 'EnrollSuccess'})
    }
    // custom (value) {
    //   console.log(1111111188882222)
    //   var regIdCard = / ^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    //   if (this.refs.input2.value.test(regIdCard) === true) {
    //     this.$refs.input2.valid = true
    //   } else {
    //     this.$refs.input2.valid = false
    //   }
    //   console.log(111111118888)
    // }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/applyRegist.scss";
</style>

