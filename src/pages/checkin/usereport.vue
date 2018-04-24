<template>
  <div class="usereport_container">
    <div class="first">
      <p>adidas春季魅&黑系列上海订货会</p>
      <span></span>
    </div>
    <div class="second">
      <img src="../../assets/images/headpic5.png" alt="">
      <div class="box1">
        <p>刘铁柱</p>
        <p>南通鸿祥贸易有限公司</p>
        <p>手机 ：15026818561</p>
        <P>身份证 ：310115188119247615</P>
        <p>酒店：无</p>
        <p>房间号：无</p>
        <p>报名时间：2010-12-10 23：11</p>
      </div>
      <p class="phone">手机</p>
      <p class="modify" @click="$router.push({'name' : 'Sqbm'})">修改</p>
    </div>
     
     <ul>
       <li>
          <span class="hui">其他成员</span>
          <span class="hui">2</span>
       </li>
       <li>
          <span><img src="../../assets/images/headpic6.png" alt=""></span>
          <div class="box">
            <span>柳清风</span>
            <span>男 <img src="../../assets/images/nan.png" alt=""></span>
            <span>代</span>
            <div class="text">
              <p>手机 ：15026818561</p>
              <P>身份证 ：310115188119247615</P>
              <p>酒店 ：无</p>
              <p>房间号 ：无</p> 
            </div>
          </div>
          <span>手机</span>
       </li>
        <li>
          <span><img src="../../assets/images/headpic8.png" alt=""></span>
          <div class="box">
            <span>陶丹凤</span>
            <span>女 <img src="../../assets/images/nv.png" alt=""></span>
            <span>代</span>
            <div class="text">
              <p>手机 ：15026818561</p>
              <P>身份证 ：310115188119247615</P>
              <p>酒店 ：无</p>
              <p>房间号 ：无</p> 
            </div>
          </div>
          <span>手机</span>
       </li>
     </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/usereport.scss";
</style>

