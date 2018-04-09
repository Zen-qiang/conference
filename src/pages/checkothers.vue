<template>
  <div class="checkothers_container">
    <div class="first">
      <img src="../assets/images/headpic5.png" alt="">
      <div class="box1">
        <p>刘铁柱</p>
        <p>南通鸿祥贸易有限公司</p>
      </div>
      <p class="modify" @click="$router.push({'name' : 'Sqbm'})">修改</p>
    </div>

    <ul>
      <li>
          <span class="hui">其他成员</span>
          <span class="hui">2</span>
      </li>
      <li>
          <div class="close"><img src="../assets/images/cha.png" alt=""></div>
          <div class="box">
            <span><img src="../assets/images/headpic2.jpg" alt=""></span>
            <span>柳清风</span>
            <span>男 <img src="../assets/images/nan.png" alt=""></span>
            <span>代</span>
           

            <div class="text">
              <p>手机 ：15026818561</p>
              <P>身份证 ：310115188119247615</P>
              <p>酒店 ：上海四级酒店</p>
              <P>房间类型 ：商务标房</P>
              <p>房间序号 ： 314</p> 
            </div>
          </div>
      </li>
      <li>
          <div class="close"><img src="../assets/images/cha.png" alt=""></div>
          <div class="box">
            <span><img src="../assets/images/headpic3.jpg" alt=""></span>
            <span>陶丹凤</span>
            <span>女 <img src="../assets/images/nv.png" alt=""></span>
            <span>代</span>
      
                  
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

  </div>
  


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../assets/css/checkothers.scss";
</style>

