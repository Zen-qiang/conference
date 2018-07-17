<template>
  <div class="usereport_container">
    <div class="first">
      <p>adidas春季魅&黑系列上海订货会</p>
      <span></span>
    </div>
    <div class="second">
      <img src="../../assets/images/headpic5.png" alt="">
      <div class="box1">
        <p>{{mainInfo.name}}</p>
        <p>{{mainInfo.company_name}}</p>
        <p>手机 ：{{mainInfo.phone_no}}</p>
        <P>身份证 ：{{mainInfo.id_number}}</P>
        <p>酒店：无</p>
        <p>房间号：无</p>
        <p>报名时间：2010-12-10 23：11</p>
      </div>
      <p class="phone">手机</p>
      <p class="modify" @click="$router.push({'name' : 'ApplyRegist'})">修改</p>
    </div>
    <div class="bottom">
       <span>已报道</span>
        <span>查看行程</span>
    </div>
     
     <ul>
       <li>
          <span class="hui">其他成员</span>
          <span class="hui">2</span>
       </li>
       <li>
          <span class="head"><img src="../../assets/images/headpic22.png" alt=""></span>
          <div class="box">
            <span>柳清风 &nbsp; 男 <img src="../../assets/images/nan.png" alt=""></span>
            <span>代</span>
             <span class="phone">手机</span>
            <div class="text">
              <p>手机 ：15026818561</p>
              <P>身份证 ：310115188119247615</P>
              <p>酒店 ：无</p>
              <p>房间号 ：无</p> 
            </div>
          </div>
       </li>
       <li class="bottom">
         <span>已报道</span>
         <span>查看行程</span>
       </li>
        <li>
          <span class="head"><img src="../../assets/images/headpic23.png" alt=""></span>
          <div class="box">
            <span>陶丹凤 &nbsp; 女 <img src="../../assets/images/nv.png" alt=""></span>
            <span>代</span>
            <span class="phone">手机</span>
            <div class="text">
              <p>手机 ：15026818561</p>
              <P>身份证 ：310115188119247615</P>
              <p>酒店 ：无</p>
              <p>房间号 ：无</p> 
            </div>
          </div>
       </li>
        <li class="bottom">
         <span class="red">未报道</span>
         <span>查看行程</span>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainInfo: {}
    }
  },
  created () {
    this.getMainInfo()
  },
  methods: {
    getMainInfo () {
      this.axios({
        method: 'get',
        url: '/api/conference/members'
      }).then(res => {
        console.log(res)
        this.mainInfo = res.data.data[0]
        // console.log(this.mainInfo[0].name)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/usereport.scss";
</style>

