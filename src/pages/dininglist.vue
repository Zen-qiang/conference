<template>
  <div class="dininglist_container">
    <div class="btn1" @click="$router.push({'name' : 'Dininglist'})">
    <img src="../assets/images/saomiao.png" alt="">
    <span>扫描用户</span>
  </div>
  
  <ul>
     <li>
      <span>当前用餐人数</span>
      <span>24</span>
    </li>
     <li>
         <img src="../assets/images/headpic10.png" alt="">
         <div class="left">
           <p>徐晓灵 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间  &nbsp;房间号：8310</p>
         </div>
      </li> 
      <li>
         <img src="../assets/images/headpic11.png" alt="">
         <div class="left">
           <p>吴亦丽 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间  &nbsp;房间号：5421</p>
         </div>
      </li> 
      <li>
         <img src="../assets/images/headpic12.png" alt="">
         <div class="left">
           <p>刘韩 <span>南通鸿祥贸易有限公司</span></p>
           <p>手机：15026818561</p>
           <p>房间类型：标间  &nbsp;房间号：8310</p>
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
  @import "../assets/css/dininglist.scss";
</style>
