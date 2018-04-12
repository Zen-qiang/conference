<template>
  <div class="dbm_container">
      <div class="add">
       <img src="../assets/images/jia.png" alt="">
       <p>代报名</p>
   </div>

   <ul>
       <li>
           <span>姓名</span>
           <span><input type="text" value='柳清风'></span>
       </li>
        <li>
            <span>照片</span>
            <span class="hui">将用于证件打印</span>
            <span><img src="../assets/images/camera.png" alt=""></span>
        </li>
        <li>
            <span>手机</span>
            <span class="hui"><input type="text" value='15026818561'></span>
        </li>
        <li>
            <span>身份证</span>
            <span><input type="text" value='310115199119267415'></span>
        </li>
        <li>
            <span>性别</span>
            <span>男 <img src="../assets/images/nan.png" alt=""></span>
            <span><img src="../assets/images/jiantou.png" alt=""></span>
        </li>
         <li>
            <span>酒店名</span>
            <span><input type="text" value="上海四季酒店陆家嘴店"></span>
        </li>
        <li>
            <span>房间类型</span>
            <span><input type="text" value="商务标间"></span>
        </li>
        <li>
            <span>房间序号</span>
            <span><input type="text" value="310"></span>
        </li>
   </ul>
   <p class="end" @click="$router.push({'name' : 'Sqbm'})">完成</p>
  </div>
   
</template>

<script>
</script>

<style lang="sass" scoped>
@import "../assets/css/dbm.scss";
</style>


