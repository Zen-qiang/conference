<template>
   <div class="bmgl_container">
     <tab :line-width="2" custom-bar-width="60px" bar-active-color="#00aac8">
      <tab-item  selected>已报道</tab-item>
      <tab-item>所有客户</tab-item>
    </tab> 
    
    <div class="box box1">
        <div class="left">
          <img src="../assets/images/headpic10.png" alt="">
        </div>
        <div class="right">
          <p>戴佩妮</p>
          <p>手机 ：15026818561</p>
          <p>身份证：3101159912047615</p>
          <p>酒店：上海四季酒店</p>
          <p>房间号：425</p>
          <P>报名时间：2018-12-10 23：11</P>
        </div>
        <div class="phone">手机</div>
        <div class="xian"></div>
        <div class="xia" @click="$router.push({'name' : 'Xcgl'})">
          <span>已报道</span>
          <span>查看行程</span>
        </div>    
    </div>

     <div class="box box2">
        <div class="left">
          <img src="../assets/images/headpic11.png" alt="">
        </div>
        <div class="right">
          <p>王倩</p>
          <p>手机 ：15026818561</p>
          <p>身份证：3101159912047615</p>
          <p>酒店：上海四季酒店</p>
          <p>房间号：425</p>
          <P>报名时间：2018-12-10 23：11</P>
        </div>
        <div class="phone">手机</div>
        <div class="xian"></div>
        <div class="xia" @click="$router.push({'name' : 'Xcgl'})">
          <span>已报道</span>
          <span>查看行程</span>
        </div>    
    </div>

   </div>
   
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/css/bmgl.scss";
</style>

