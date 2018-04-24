<template>
  <div class="staylist_container">
    <div class="first">
       <span><img src="../../assets/images/hotel.png" alt=""></span>
       <span @click="$router.push({'name': 'Zsgl'})">上海全季酒店（陆家嘴店）</span> 
    </div>
    <div class="second">
      <p>标间数：2 &nbsp;&nbsp;大床：8 &nbsp;&nbsp;双人床：4 &nbsp;&nbsp;三人床：2</p>
    </div>
    <ul>
      <li>
         <span><img src="../../assets/images/headpic5.png" alt=""></span>
         <span>刘铁柱 &nbsp;&nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
         <span>标间1</span>
         <span>序号1</span>
      </li>
      <li>
         <span><img src="../../assets/images/headpic6.png" alt=""></span>
         <span>戴佩妮 &nbsp;女 <img src="../../assets/images/nv.png" alt=""></span>
         <span>代</span>
         <span>套房3</span>
         <span>序号2</span>
      </li>
      <li>
         <span><img src="../../assets/images/headpic7.png" alt=""></span>
         <span>戴佩妮 &nbsp;女 <img src="../../assets/images/nv.png" alt=""></span>
         <span>代</span>
         <span>大床2</span>
         <span>序号3</span>
      </li>
      <li>
         <span><img src="../../assets/images/headpic8.png" alt=""></span>
         <span>周辛雨 &nbsp;女 <img src="../../assets/images/nv.png" alt=""></span>
         <span>代</span>
         <span>水房4</span>
         <span>序号4</span>
      </li>
      <li>
         <span><img src="../../assets/images/headpic9.png" alt=""></span>
          <span>杭鱼风 &nbsp;男 <img src="../../assets/images/nan.png" alt=""></span>
          <span>代</span>
         <span>标间1</span>
         <span>序号5</span>
      </li>
    </ul>
     <p class="else">未勾选编辑人员无需住宿自行解决</p>
    <!-- <p class="save" @click="$router.push({'name': 'Zsgl1'})">保存</p> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import  "../../assets/css/staylist.scss";
</style>

